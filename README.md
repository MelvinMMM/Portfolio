# Portfolio de Melvin Mateta v2.4.0

> **"Codeur ultra-rapide & créatif"**
> Optimisation, composition et interfaces soignées — je conçois des sites web rapides et accessibles.

---
## Mise à jour (v2.4.0) :

* **Ajout de 3 nouveaux projets** : 
  * **ChicBook** : Job board pour artistes conçu en HTML/JS/PHP et Tailwind CSS (Projet de stage de 2 mois).
  * **Event-Horizon** : Globe interactif 3D des incidents mondiaux conçu avec Three.js, Globe.gl et i18n multilingue.
  * **Arbitrage Travail-Région** : Algorithme déterministe de scoring et aide à la décision pour le télétravail (Python/Streamlit).
* **Refonte Technique (Vanilla CSS)** : Suppression complète de Bootstrap pour un design fluide, léger et moderne 100% Vanilla CSS (Grilles CSS Grid natives et Flexbox).
* **Contrôles Audio & Expérience Utilisateur** : Boutons de sourdine pour la musique et les effets du jeu de la page À Propos et du Mode Sonic.
* **Accessibilité améliorée** : Masquage par défaut du jeu Canvas sur la page À Propos sous un bouton d'activation pour un accès direct au profil textuel pour les lecteurs d'écran.

---
## Auteur
* **Melvin Mateta** : Développeur Web, Nocode / Lowcode, Musicien & Data.

---

## Description
Ce projet est un portfolio interactif regroupant mes compétences en **Développement Web**, **Nocode / Lowcode** et **Data**. Il a été conçu pour rendre l'expérience utilisateur immersive en intégrant un "Mode Sonic", des contrôles audio complets et un mini-jeu interactif pour découvrir mon parcours.

### Fonctionnalités principales :
* **Galerie de projets dynamique** : Présentation détaillée avec descriptions complètes, carrousels et images pour des projets comme ChicBook, Event-Horizon, Pokédex ou le Générateur de maquettes.
* **Navigation Intuitive** : Carrousel de projets avec flèches de navigation personnalisées et scroll fluide.
* **Système de Gamification** : Un mini-jeu développé avec l'API Canvas (JS) permettant d'explorer mes compétences de manière ludique.
* **Mode Sonic** : Changement de thème dynamique incluant des couleurs spécifiques, des GIFs animés, des sons de rings et un lecteur de musique de fond.
* **Design Responsif & Fluide** : Interface entièrement optimisée pour mobiles, tablettes et ordinateurs sans dépendance à des frameworks lourds.

---

## Technologies
Le projet utilise une stack technique variée pour réunir performance visuelle et logique :

* **Frontend** : HTML5, CSS3 (Flexbox/Grid), JavaScript (ES6+).
* **Styling (CSS)** : Vanilla CSS (sur mesure sans Bootstrap).
* **Animations** : CSS Keyframes, Canvas API pour le moteur de jeu.
* **Design & Prototypage** : Figma.
* **Typographie** : **Orbitron** pour les titres technologiques et **IBM Plex Mono** pour l'aspect programmation.

---

## Structure du Projet
* **css/** : Contient les feuilles de style globales (global.css), thématiques (sonic.css) et spécifiques aux pages.
* **js/** : Logique JavaScript incluant le menu burger, le carrousel, le mode Sonic et le moteur de jeu.
* **img/** : Ressources graphiques, screenshots réels des projets (chicbook, eventhorizon, arbitrage) et logo de marque.
* **detail/** : Pages HTML détaillant chaque projet individuellement.
* **index.html** : Page d'accueil avec présentation et derniers projets.
* **projets.html** : Liste ordonnée de tous mes projets professionnels et personnels.

---

## Prérequis
* Un navigateur web moderne (Chrome, Firefox, Edge, Safari).
* Un serveur local (type Live Server sur VS Code) est recommandé pour le bon fonctionnement des assets et des scripts.

---

## Installation

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/MelvinMMM/portfolio.git
   cd portfolio
   ```
2. **Lancer le serveur** : Ouvrir `index.html` via votre extension de serveur local favorite.
