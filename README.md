# Irimia Rénovation — Site vitrine

Site corpo statique HTML/CSS/JS pour Irimia Rénovation (SAS, Nice).

## Stack
- HTML5 sémantique
- CSS3 (variables, grid, flex)
- JavaScript vanilla (IntersectionObserver pour reveal au scroll)
- Polices : Cormorant Garamond + Inter (Google Fonts)
- Servi par nginx alpine

## Local
Ouvrir `index.html` directement, ou avec un serveur local :
```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## Déploiement
Push sur `main` → GitHub Actions → image GHCR → déploiement VPS via Traefik.

URL prod : https://irimia.51.77.223.61.nip.io

## Formulaire de contact
Envoie sur `irimiarenovation@gmail.com` via [FormSubmit](https://formsubmit.co).
À la **première soumission**, FormSubmit envoie un mail de confirmation à
l'adresse pour activer la boîte. Ouvrir le mail et cliquer le lien une fois.
