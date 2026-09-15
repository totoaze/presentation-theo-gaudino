# Théo Gaudino - CV Website

Un site web professionnel et moderne pour présenter mon CV et mon expérience en tant que développeur et technicien informatique.

## 🌟 Caractéristiques

- **Design Moderne**: Interface épurée et contemporaine avec dégradés attrayants
- **Responsive**: Entièrement compatible mobile, tablette et ordinateur
- **Animations Fluides**: Transitions et animations subtiles pour une meilleure expérience utilisateur
- **Multi-pages**: Navigation facile entre différentes sections
- **Sombre Professionnel**: Thème sombre moderne avec accents vibrantes

## 📁 Structure du Projet

```
CV SITE INTERNET/
├── index.html          # Page d'accueil principale
├── about.html          # À propos de moi
├── experience.html     # Expérience professionnelle
├── skills.html         # Compétences et formation
├── contact.html        # Informations de contact
└── assets/
    ├── style.css       # Feuille de style principale
    └── script.js       # Scripts JavaScript
```

## 📄 Pages Disponibles

### 1. **Accueil (index.html)**
- Présentation générale
- Aperçu de l'expérience
- Compétences clés
- Qualités personnelles

### 2. **À Propos (about.html)**
- Biographie personnelle
- Qualités et traits de caractère
- Intérêts personnels
- Formation et langues

### 3. **Expérience (experience.html)**
- Timeline complète des expériences professionnelles
- Détails de chaque stage
- Compétences développées
- Statistiques professionnelles

### 4. **Compétences (skills.html)**
- Compétences techniques détaillées
- Compétences personnelles/soft skills
- Certifications et formations
- Impact professionnel

### 5. **Contact (contact.html)**
- Informations de contact directe
- Formulaire de contact
- Disponibilité
- Localisation

## 🎨 Design & Couleurs

Le site utilise une palette de couleurs cohérente:
- **Couleur primaire**: #1a1a2e (Bleu très foncé)
- **Couleur secondaire**: #16213e (Bleu foncé)
- **Accent**: #e94560 (Rose/Rouge)
- **Texte clair**: #eaeaea

## 🚀 Comment Utiliser

1. **Ouvrir le site**:
   - Double-cliquez sur `index.html` pour ouvrir dans le navigateur
   - Ou utilisez un serveur local (voir ci-dessous)

2. **Utiliser avec un serveur local** (recommandé):
   ```bash
   # Avec Python 3
   python -m http.server 8000
   
   # Ou avec Node.js (si http-server est installé)
   http-server
   ```
   Puis ouvrez `http://localhost:8000` dans votre navigateur

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints pour:
- Ordinateurs de bureau (1200px+)
- Tablettes (768px - 1199px)
- Mobiles (< 768px)

## 💻 Navigateur Supportés

- Chrome/Chromium (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)

## 📝 Personnalisation

Pour modifier le contenu:

1. **Informations personnelles**: Modifiez les fichiers HTML
2. **Couleurs**: Changez les variables CSS dans `assets/style.css` (voir `:root`)
3. **Contenu**: Éditez le texte directement dans chaque fichier HTML
4. **Animations**: Modifiez les `@keyframes` dans `style.css`

## 🔧 Modification des Couleurs

Ouvrez `assets/style.css` et modifiez les variables dans la section `:root`:

```css
:root {
  --primary-color: #1a1a2e;
  --secondary-color: #16213e;
  --accent-color: #0f3460;
  --highlight-color: #e94560;
  --light-text: #eaeaea;
  --dark-text: #0a0e27;
  /* ... */
}
```

## 📬 Formulaire de Contact

Le formulaire de contact utilise la fonctionnalité `mailto` native pour ouvrir le client email par défaut. Pour une intégration backend complète, vous pouvez:

1. Utiliser un service comme Formspree.io
2. Intégrer un backend Node.js/PHP
3. Utiliser des services comme EmailJS

## 🌐 Déployer en Ligne

### Option 1: GitHub Pages
1. Créez un repo GitHub
2. Poussez les fichiers
3. Activez GitHub Pages dans les paramètres
4. Votre site sera accessible à `username.github.io/cv-site`

### Option 2: Netlify
1. Allez sur netlify.com
2. Glissez-déposez votre dossier
3. Votre site est automatiquement deployé

### Option 3: Vercel
1. Allez sur vercel.com
2. Importez votre repo ou uploadez les fichiers
3. Votre site est automatiquement deployé

### Option 4: Hébergeur web classique
1. Uploadez tous les fichiers via FTP
2. Assurez-vous que `index.html` est à la racine

## 📊 Performance

Le site est optimisé pour:
- Temps de chargement rapide
- Faible consommation de bande passante
- Animations GPU-accélérées
- SEO amical

## 🔐 Données Personnelles

Les informations de contact affichées sont vos vraies coordonnées. Pour plus de confidentialité:
- Utilisez une adresse email de contact séparée
- Utilisez un formulaire backend au lieu de mailto
- Cachez votre numéro de téléphone derrière un formulaire

## 📄 Licence

Ce site est personnel et créé pour Théo Gaudino.

## 📞 Contact

- **Email**: theo.gaudino@perrimond.eu
- **Téléphone**: 06 10 74 49 73
- **Localisation**: Marseille, France

---

**Version**: 1.0
**Dernière mise à jour**: Septembre 2025
