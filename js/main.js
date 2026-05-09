(() => {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // Loader hide on load
  window.addEventListener('load', () => {
    const loader = $('#loader');
    if (loader) {
      setTimeout(() => loader.classList.add('is-hidden'), 250);
    }
  });

  // Header scroll state
  const header = $('#header');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  const navToggle = $('#navToggle');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = header.classList.toggle('is-menu-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    $$('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('is-menu-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Intersection observer reveals
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }

  // Year in footer
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Display thank-you state if redirected with ?envoye=1
  if (new URLSearchParams(window.location.search).get('envoye') === '1') {
    const form = $('#contactForm');
    if (form) {
      const thanks = document.createElement('div');
      thanks.className = 'form__thanks';
      thanks.innerHTML = `
        <h3 style="font-family:var(--ff-serif);font-size:1.75rem;color:var(--c-brown);margin-bottom:0.75rem;font-style:italic;">Merci pour votre message.</h3>
        <p style="color:var(--c-ink-soft);">Nous vous recontactons sous 48 heures pour échanger sur votre projet.</p>
      `;
      thanks.style.cssText = 'background:var(--c-white);padding:3rem;text-align:center;border-radius:var(--radius);box-shadow:var(--shadow-soft);';
      form.replaceWith(thanks);
      // Scroll to thanks
      setTimeout(() => thanks.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
    }
  }
})();
