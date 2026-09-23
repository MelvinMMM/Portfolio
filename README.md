# Portfolio de Melvin Mateta — v3.0.0

> **"Développeur Web & Créatif — Fast, Modern & Cyber Interfaces"**  
> Conception d'applications web réactives, architecture modulaire, composition musicale et interfaces cyberpunk soignées.

[![Version](https://img.shields.io/badge/version-3.0.0-00f7ff.svg?style=for-the-badge&logo=semver)](https://github.com/MelvinMMM/portfolio)
[![Status](https://img.shields.io/badge/status-production_ready-00ff66.svg?style=for-the-badge)](https://github.com/MelvinMMM/portfolio)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](LICENSE)

---

## 🚀 Nouveautés Majeures de la Version 3.0.0 (Septembre 2026)

Cette version **3.0.0** marque une évolution majeure du portfolio avec l'intégration d'applications déployées à forte valeur ajoutée, un moteur de recherche et de filtrage dynamique instantané, une refonte responsive complète en glassmorphism cyberpunk et une restructuration propre et modulaire des assets.

### 🌟 1. Nouveaux Projets Déployés & Réalisations
* **[Mixology Master](detail/detailmixology.html) (v1.2.0)** : Application web d'entraînement et révision interactive pour barmans (QCM, chronomètre, scoring, synthèse vocale Web Audio API et moteur de questions Python). Déployée en production sur [Netlify](https://mixologie-mastering.netlify.app/) • [Code source GitHub](https://github.com/MelvinMMM/Mixologie-Mastering).
* **[ToitMoi](detail/detailtoitmoi.html) (v0.1.0)** : Plateforme SaaS d'estimation immobilière et de simulation financière avancée avec animations interactives fluides (React, TypeScript, Framer Motion, Tailwind CSS, Docker). Déployée sur [Netlify](https://toitmoi.netlify.app/) • [Code source GitHub](https://github.com/MelvinMMM/ToitMoi).
* **[La Légende d'El Agatha](detail/detailelagatha.html) (v1.0.0)** : Action-RPG 2D rétro développé de A à Z en JavaScript Canvas avec moteur physique, système de combat en temps réel et bande-son chiptune originale composée sur LMMS. Déployée sur [Netlify](https://lalegendedelagatha.netlify.app/) • [Code source GitHub](https://github.com/MelvinMMM/la-legende-del-agatha).

### ⚡ 2. Le Hub de Navigation Cyber & Filtrage par Badges (`projets.html`)
* **Recherche en temps réel** : Moteur de recherche Vanilla JS instantané insensible à la casse et aux accents sur les titres, résumés et tags.
* **Filtrage dynamique par badges technologiques** : Comptage automatique et sélection parmi 25 technologies (React, TypeScript, Three.js, Python, Tailwind CSS, Docker, etc.).
* **Deep Linking & Interconnexion** : Support des paramètres d'URL (`?tag=...` et `?search=...`) avec mise à jour d'historique (`history.replaceState`) et redirection directe depuis les badges de l'accueil (`index.html`).
* **Gestion d'état vide (*Empty State*)** et masquage automatique des catégories sans résultat.

### 💎 3. Refonte Responsive & Cyber Glassmorphism des Pages Détails (`css/detailprojets.css`)
* **HUD Metadata Card** : En-têtes techniques façon widget cyberpunk avec bordures néon cyan et grilles CSS adaptatives.
* **Hiérarchie sémantique mobile** : Restructuration de l'ordre d'affichage (Titre/Description d'abord `order: 1`, Médias pleine largeur ensuite `order: 2`).
* **Micro-interactions & Glassmorphism** : Cartes de fonctionnalités encapsulées avec effets de lueur et d'élévation au survol.
* **Standardisation des versions logicielles** : Intégration systématique des badges `vX.X.X` sur l'ensemble des 12 fiches projets.

### 🌀 4. Mode Sonic Rétro & Immersion Graphique
* **Bouton dédié** : Intégration de l'icône vectorielle officielle `sonic-icon.svg`.
* **Identité visuelle dynamique** : Remplacement du logo de marque par le logo Sonic bleu haute définition (`img/sonic/logo-sonic.png`), favicon dynamique, halo néon doré (*Golden Ring*), GIFs animés et lecteur musical rétro.

### 📁 5. Modularisation & Nettoyage Complet de l'Architecture (`img/`)
* **14 sous-dossiers thématiques** : Encapsulation autonome de toutes les ressources médias (`agatha/`, `arbitrage/`, `calculatrice/`, `chicbook/`, `eventhorizon/`, `maquette/`, `mixology/`, `pokedex/`, `portfolio-wp/`, `prospection/`, `seikan/`, `sonic/`, `tcta/`, `toitmoi/`).
* **Racine épurée** : Réduction aux seuls assets globaux (`logo.png`, `melvin3.png`).
* **Suppression de plus de 25 fichiers orphelins** (~3.8 Mo allégés).
* **Harmonisation globale** : Copyright 2026, intégration des liens YouTube et reset CSS universel `box-sizing: border-box`.

---

## 👤 Auteur & Profil

* **Melvin Mateta** — Développeur Web Fullstack, Créateur No-Code / Low-Code, Musicien & Data Analyst.
* **YouTube** : [@rohaxmm6315](https://www.youtube.com/@rohaxmm6315)
* **GitHub** : [@MelvinMMM](https://github.com/MelvinMMM)

---

## 🛠️ Stack Technique & Outils

| Domaine | Technologies & Outils |
| :--- | :--- |
| **Frontend & Web** | HTML5, CSS3 Moderne (CSS Grid, Flexbox), JavaScript (ES6+ Vanilla), React, TypeScript |
| **Styling & UI** | Vanilla CSS (Glassmorphism sur mesure, 0 framework lourd superflu), Tailwind CSS, Bootstrap |
| **3D & Canvas** | Three.js, Globe.gl, HTML5 Canvas API (Game Engine 2D) |
| **Backend & Logic** | PHP, Python, Web Audio API |
| **Data & Analyse** | Pandas, Streamlit, Data Science, Airtable, Zapier |
| **DevOps & Outils** | Docker, Git, GitHub, Netlify, WordPress, Divi, Figma, LMMS |
| **Typographie** | **Orbitron** (titres cyberpunk / néon) & **IBM Plex Mono** (code / badges / métadonnées) |

---

## 📂 Architecture du Projet

```text
Portfolio/
├── css/
│   ├── global.css            # Styles globaux, variables CSS, reset box-sizing, navbar & footer
│   ├── index.css             # Styles de la page d'accueil (Hero, Stack, Services, Derniers projets)
│   ├── projets.css           # Catalogue des projets, Hub de filtrage, barre de recherche
│   ├── detailprojets.css     # Fiches détaillées, glassmorphism HUD, carrousels, responsive
│   ├── apropos.css           # Page À Propos et intégration du jeu Canvas
│   ├── forum.css             # Page de contact / forum
│   ├── sonic.css             # Thème alternatif immersif Mode Sonic
│   ├── stylec.css            # Feuille de style dédiée pour la calculatrice interactive
│   └── stylem.css            # Feuille de style dédiée pour le générateur de maquettes
├── js/
│   ├── index.js              # Menu burger, navigation, gestion du Mode Sonic & audio
│   ├── filter-projects.js    # Moteur de recherche et de filtrage dynamique par badges
│   ├── detailprojets.js      # Carrousel tactile et défilement fluide des projets suggérés
│   ├── script.js             # Moteur du mini-jeu interactif Canvas (page À Propos)
│   └── sonic.js              # Effets sonores et gestion des rings en mode Sonic
├── img/                      # 14 dossiers modulaires dédiés par projet + assets globaux
│   ├── agatha/
│   ├── arbitrage/
│   ├── calculatrice/
│   ├── chicbook/
│   ├── eventhorizon/
│   ├── maquette/
│   ├── mixology/
│   ├── pokedex/
│   ├── portfolio-wp/
│   ├── prospection/
│   ├── seikan/
│   ├── sonic/
│   ├── tcta/
│   ├── toitmoi/
│   ├── logo.png              # Logo global du portfolio
│   └── melvin3.png           # Portrait principal
├── detail/                   # 12 fiches projets individuelles
│   ├── detailmixology.html
│   ├── detailtoitmoi.html
│   ├── detailelagatha.html
│   ├── detailchicbook.html
│   ├── detaileventhorizon.html
│   ├── detailarbitrage.html
│   ├── detailportfolio.html
│   ├── detailcalculatrice.html
│   ├── detailpokedex.html
│   ├── detailmaquette.html
│   ├── detailprospection.html
│   └── detailtcta.html
├── projets/                  # Mini-applications interactives hébergées localement
│   ├── calculatrice.html
│   └── maquette.html
├── index.html                # Page d'accueil principale
├── projets.html              # Hub des projets avec recherche & filtres
├── apropos.html              # Parcours, compétences et mini-jeu interactif
├── forum.html                # Formulaire de contact et d'échange
├── GEMINI.md                 # Journal de bord et mémoire persistante du projet
└── README.md                 # Documentation officielle du projet
```

---

## ⚡ Installation & Utilisation Locale

### Prérequis
* Un navigateur moderne (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
* Une extension de serveur local (ex. **Live Server** sur Visual Studio Code) pour exécuter sans restriction de politique CORS les modules JavaScript, les pistes audio et les textures Canvas/WebGL.

### Déploiement local
1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/MelvinMMM/portfolio.git
   cd portfolio
   ```
2. **Lancer un serveur local** :
   * Avec VS Code : Clic droit sur `index.html` > *Open with Live Server*.
   * Ou avec Python :
     ```bash
     python -m http.server 8000
     ```
     Puis ouvrir `http://localhost:8000` dans le navigateur.

---

## 📜 Licence & Droits

Tous droits réservés © 2026 **Melvin Mateta**.  
Code source disponible sous licence MIT.
