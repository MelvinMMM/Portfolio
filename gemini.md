# Journal des Modifications - Portfolio de Melvin Mateta

Ce fichier sert de mémoire persistante pour l'agent IA (Gemini). À chaque modification du projet, les détails du changement doivent être consignés ici chronologiquement.

---

## [2026-07-01] Mise à jour du README.md (v2.4.0), Accessibilité & Nettoyage de Code

### Contexte & Problématique
Le projet passe en version 2.4.0 après l'intégration de trois nouveaux projets, la suppression complète du framework Bootstrap et le déploiement de contrôles d'accessibilité/audio. Il faut également nettoyer les vieux commentaires et résoudre les conflits d'accessibilité en suspens.

### Modifications Apportées
1. **Mise à jour de `README.md` :**
   * Passage en version `v2.4.0`.
   * Ajout de la description des trois projets récents (ChicBook, Event-Horizon, Arbitrage Travail-Région).
   * Remplacement de la stack technique Bootstrap par du Vanilla CSS (CSS Grid/Flexbox).
   * Mention de l'amélioration de l'accessibilité (sourdine audio, masquage du jeu Canvas par défaut).
2. **Accessibilité (A11y) :**
   * Correction du conflit de la photo portrait dans `index.html` en passant son attribut `alt="Melvin illustration"` en `alt=""` pour les éléments masqués sous `aria-hidden="true"`.
   * Ajout d'une description textuelle de secours (fallback) claire dans l'élément `<canvas>` dans `apropos.html` pour les lecteurs d'écran.
3. **Nettoyage de Code :**
   * Suppression définitive des cartes d'articles de blog exemples commentées dans `forum.html`.

---

## [2026-07-01] Ajout du Projet Arbitrage Travail-Région (Hyper-Local)

### Contexte & Problématique
L'utilisateur souhaite présenter son projet solo Python / Streamlit d'aide à la décision pour le télétravail **Arbitrage Travail-Région** (développé en avril 2026). Ce projet intègre de la data science et un pivot d'un modèle Machine Learning RandomForest vers un algorithme déterministe pondéré basé sur le stress réseau de la SNCF/RATP.

### Modifications Apportées
1. **Création de `detail/detailarbitrage.html` :**
   * Rédaction de fiches descriptives détaillées expliquant le pivot technique (ML vs scoring déterministe) et les fonctionnalités clés (Géolocalisation, Météo hyper-locale, Verdict, Tableaux de bord de tendances).
   * Intégration de sections avec lien vers le dépôt GitHub.
   * Insertion des captures d'écran réelles fournies dans le dossier `img/arbitrage/` : `interface.png`, `meteo.png`, `ecrandeverdict.png` et `graphique.png`.
2. **Mise à jour de `projets.html` :**
   * Ajout de la carte projet dédiée à **Arbitrage Travail-Région** sous la catégorie **Autre**, positionnée en premier par ordre chronologique (Avril 2026, devant Soundtrack - TCTA de Septembre 2024) avec son image réelle.
3. **Mise à jour des sliders des autres projets :**
   * Ajout de la prévisualisation d'**Arbitrage Travail-Région** dans les carrousels de `detailchicbook.html`, `detailpokedex.html`, et `detaileventhorizon.html` avec son image d'accueil réelle.

---

## [2026-07-01] Tri Chronologique & Renommage de Catégorie dans projets.html

### Contexte & Problématique
L'utilisateur a demandé d'afficher ses projets du plus récent au plus ancien (ordre chronologique inverse) au sein de chaque section, tout en renommant la catégorie "Musique" par "Autre".

### Modifications Apportées
1. **Réorganisation chronologique sur `projets.html` :**
   * Tri de la section **Développement Web** dans cet ordre : ChicBook (Juin 2026), Event-Horizon (Avril 2026), WordPress Portfolio (Janvier 2026), Calculatrice (Août 2025), Pokédex (Juin 2025), et Générateur de maquette (Mai 2025).
2. **Renommage de la catégorie :**
   * Remplacement de la balise `<h2>Musique</h2>` par `<h2>Autre</h2>` sur `projets.html` pour accueillir de futurs projets non professionnels.

---

## [2026-07-01] Ajout du Projet Event-Horizon (Globe 3D des Incidents Mondiaux)

### Contexte & Problématique
L'utilisateur souhaite présenter son projet académique/professionnel de JavaScript **Event-Horizon** (développé en avril 2026 avec Iris Hadj Mahfoud). Il s'agit d'un globe 3D interactif récupérant les catastrophes mondiales en temps réel depuis les API de la NASA et de l'USGS.

### Modifications Apportées
1. **Création de `detail/detaileventhorizon.html` :**
   * Rédaction complète des fiches descriptives pour 5 fonctionnalités clés (Rendu Globe 3D, Flux incidents en temps réel, Recherche & Filtres, Tooltips géopolitiques RestCountries, Internationalisation multilingue via i18next).
   * Intégration de sections avec liens vers le dépôt GitHub et le site en ligne (GitHub Pages).
   * Insertion des captures d'écran réelles fournies dans le dossier `img/eventhorizon/` : `vueprincipale.png`, `interface.png`, `pointsincidents.png`, `filtre.png`, `infopays.png` et `selecteurdelangue.png`.
2. **Mise à jour de `projets.html` :**
   * Ajout de la carte projet dédiée à **Event-Horizon** sous la section "Développement Web", avec ses badges technologiques associés et l'image d'accueil réelle.
3. **Mise à jour des sliders des autres projets :**
   * Ajout de la prévisualisation d'**Event-Horizon** dans les carrousels de `detailchicbook.html` et `detailpokedex.html` avec son image d'accueil réelle.

---

## [2026-07-01] Suppression de la Section Design Graphique & des Projets Obsolètes

### Contexte & Problématique
L'utilisateur a choisi de retirer la catégorie de projets "Design Graphique" ainsi que plusieurs cartes de projets commentées dans le code (obsolètes ou non prioritaires). Il fallait également purger les fichiers descriptifs associés pour garder le projet propre.

### Modifications Apportées
1. **Nettoyage de `projets.html` :**
   * Retrait complet de la section "Design Graphique" (titre et carte du projet *Seikan*).
   * Suppression de toutes les cartes de projets commentées dans le code HTML (*Où serez-vous ?* et *AB - Tendances 2007*).
2. **Suppression des fichiers physiques :**
   * Suppression définitive des 3 fichiers de détail orphelins : `detail/detaillogo.html` (Seikan), `detail/detailaffiche.html` (Où serez-vous ?) et `detail/detailarticle.html` (AB - Tendances).
3. **Nettoyage des carrousels (Sliders) :**
   * Retrait de la carte de prévisualisation de *Seikan* (qui pointait vers `detaillogo.html`) dans les sliders de bas de page de `detailcalculatrice.html`, `detailchicbook.html`, `detailmaquette.html` et `detailtcta.html` afin d'éviter les liens morts (erreurs 404).

---

## [2026-07-01] Intégration des Captures d'Écran, Messagerie & Corrections pour ChicBook

### Contexte & Problématique
L'utilisateur a fourni les captures d'écran réelles du projet **ChicBook**. De plus, le terme "portefeuille" était utilisé à tort à la place de "portfolio", et la fonctionnalité de messagerie instantanée manquait à la présentation.

### Modifications Apportées
1. **Intégration des images réelles dans `detail/detailchicbook.html` :**
   * Remplacement de l'ensemble des cadres pointillés par les balises `<img>` correspondantes (`pagedaccueil.png`, `fildactualite.png`, `rechercheruntalent.png`, `casting.png`, `profilportfolio.png`, `themesombreclair.png`).
2. **Ajout de la Messagerie privée :**
   * Création d'une 6ème section de fonctionnalité décrivant la messagerie en temps réel entre artistes et recruteurs, avec insertion de la capture d'écran `messagerie.png`.
3. **Mise en conformité terminologique et date :**
   * Remplacement de toutes les occurrences de "portefeuille" par "portfolio" dans `detail/detailchicbook.html`.
   * Remplacement de la section "Rôle" par la date du projet (Juin 2026) dans l'en-tête de la page de détails.
4. **Mise à jour des aperçus globaux :**
   * Remplacement du placeholder d'image par la capture d'accueil réelle dans la carte projet de `projets.html` et dans le carrousel de bas de page de `detail/detailpokedex.html`.
5. **Ajout du lien GitHub :**
   * Intégration de la section `.project-links` pointant vers le dépôt GitHub public `https://github.com/ryukimir/ChicBook`.

---

## [2026-07-01] Ajout du Projet ChicBook (Job Board pour Artistes)

### Contexte & Problématique
Le projet de stage de 2 mois de l'utilisateur, un job board pour artistes nommé **ChicBook** (développé en HTML, JS, PHP, Tailwind CSS), manquait à son portfolio. Il fallait concevoir sa page descriptive tout en guidant l'utilisateur sur les captures d'écran à prendre ultérieurement.

### Modifications Apportées
1. **Création de `detail/detailchicbook.html` :**
   * Rédaction de fiches explicatives détaillées pour 5 fonctionnalités majeures (Fil d'actualité, Recherche de talents, Outils d'édition, Profil Portfolio, Authentification & Thème sombre/clair).
   * Intégration de boîtes de placeholders (`.img-placeholder` stylées en CSS néon avec des bordures pointillées et des icônes FontAwesome) contenant des consignes claires sur les captures d'écran à prendre.
   * Ajout du carrousel de bas de page reliant l'ensemble des autres projets.
2. **Mise à jour de `projets.html` :**
   * Ajout de la carte projet **ChicBook** sous la section "Développement Web" avec ses badges technologiques et son placeholder d'image coordonné.
3. **Mise à jour de `detail/detailpokedex.html` :**
   * Ajout de la carte de prévisualisation de **ChicBook** dans son carrousel de bas de page.

---

## [2026-07-01] Refonte de la Page À Propos & Gestion de l'Audio du Jeu

### Contexte & Problématique
La page "À propos" était dominée par le jeu Canvas tout en haut. Cela rendait la page inaccessible pour les lecteurs d'écran et peu agréable pour les visiteurs pressés. De plus, le jeu n'offrait aucun moyen de couper le son qui se déclenchait lors des déplacements.

### Modifications Apportées
1. **Refonte structurelle et textuelle de `apropos.html` :**
   * Ajout d'une section de présentation (Hero) contenant une description complète rédigée sur Melvin (à gauche) et des informations clés (à droite, incluant le lien vers le CV et le contact).
   * Réorganisation des cartes de compétences (Dev Web, Musique, NoCode/LowCode, Expérience, Disponibilités).
   * Déplacement du jeu Canvas tout en bas, masqué par défaut avec la classe `.hidden`.
2. **Contrôle de l'affichage du jeu dans `js/game.js` :**
   * Ajout d'un bouton de contrôle `[Lancer la version interactive]` pour afficher/masquer le jeu.
   * Ajout du défilement fluide vers le conteneur du jeu lors de l'activation et forçage de l'appel de `resizeGame()` pour éviter des problèmes de proportions du canvas après l'affichage.
3. **Mise en sourdine de l'audio du jeu :**
   * Intégration d'un bouton flottant absolu `#game-music-toggle` en haut à droite du conteneur du jeu.
   * Réduction du volume par défaut de la musique du jeu de `0.3` à `0.15` pour un confort accru.
   * Ajout de la logique de coupure et d'activation globale du son (musique + effets sonores) lors du clic sur le bouton de sourdine.
4. **Mise à jour esthétique dans `css/apropos.css` :**
   * Création de styles pour le Hero (`.about-hero`, `.about-info-list`), le bouton d'activation du jeu (`.game-toggle-section`) et le bouton de sourdine flottant (`.game-music-toggle`).

---

## [2026-07-01] Optimisation du Mode Sonic & Contrôle de l'Audio

### Contexte & Problématique
Le "Mode Sonic" jouait la musique de fond à 70% de volume par défaut sans possibilité de la couper de manière indépendante, ce qui pouvait gêner l'utilisateur.

### Modifications Apportées
1. **Contrôle du volume de base :**
   * Réduction du volume par défaut de la musique Sonic de `0.7` à `0.15` dans `js/index.js` pour une expérience plus agréable.
2. **Ajout d'un bouton de sourdine (Mute) :**
   * Intégration d'un bouton `<button id="music-toggle">` dans `index.html` (masqué par défaut en mode classique, visible uniquement en mode Sonic).
   * Ajout de la logique de basculement du son (Mute/Unmute) avec gestion des icônes (`🔊` et `🔇`) et des attributs ARIA pour l'accessibilité dans `js/index.js`.
3. **Mise à jour esthétique :**
   * Ajout des règles de style CSS pour le bouton de contrôle audio dans `css/index.css` (mode classique caché) et `css/sonic.css` (mode Sonic style pilule jaune).

---

## [2026-07-01] Retrait du lien vers le Blog (forum.html) de la navigation

### Contexte & Problématique
Le blog (forum.html) n'étant pas une priorité pour le moment et n'étant pas jugé assez impactant, l'utilisateur a décidé de désactiver son accès.

### Modifications Apportées
1. **Désactivation de la navigation :**
   * Retrait du lien `<a class="nav-link" href="forum.html">Blog</a>` (et des variantes avec chemin relatif `../forum.html`) de l'en-tête de toutes les pages HTML du site :
     * `index.html`
     * `projets.html`
     * `apropos.html`
     * Les 9 pages de détails dans le dossier `detail/`.
2. **Statut du fichier :**
   * Le fichier `forum.html` est conservé dans le dépôt pour archivage/travail futur, mais il n'est plus lié et est donc "orphelin".

---

## [2026-07-01] Suppression de Bootstrap & Grille CSS Grid Vanilla

### Contexte & Problématique
Pour valoriser la maîtrise du CSS moderne et alléger les dépendances, nous avons éliminé Bootstrap de la page `projets.html` pour le remplacer par une grille CSS Grid native, performante et propre.

### Modifications Apportées
1. **Mise à jour de `projets.html` :**
   * Retrait des liens CDN css et js de Bootstrap 5.3.
   * Remplacement des classes de structure Bootstrap (`row`, `col-12 col-md-4`) par notre nouvelle classe personnalisée `.projects-grid`.
   * Simplification des classes des cartes et des boutons (suppression de `text-light` et `btn-primary`).
   * Nettoyage de balises orphelines et correction de la syntaxe des commentaires HTML dans la section *Design Graphique*.
2. **Refonte de `css/projets.css` :**
   * Création de la classe `.projects-grid` utilisant `display: grid` avec redimensionnement automatique responsive (`repeat(auto-fill, minmax(320px, 1fr))`).
   * Refonte de `.card` avec Flexbox (`display: flex; flex-direction: column`) pour pousser automatiquement le bouton "Voir plus" en bas, uniformisant ainsi la hauteur des cartes.
   * Ajout d'animations fluides au survol des cartes (`transform: translateY(-4px)`, ombres portées, liseré lumineux).
   * Refonte esthétique des boutons et correction de styles du titre `h2` pour y inclure un séparateur horizontal élégant.

---

## [2026-07-01] Consolidation du CSS Commun & Nettoyage

### Contexte & Problématique
Le projet contenait 11 fichiers CSS distincts (originellement prévus pour une architecture PHP modulaire qui a été abandonnée pour un déploiement statique sur Netlify). Cela multipliait inutilement les requêtes réseau et rendait la maintenance compliquée.

### Modifications Apportées
1. **Création de `css/global.css` :**
   * Fusion des variables de design (`:root`), des styles du conteneur global, du menu burger (`.site-header`) et du footer (`.site-footer`).
2. **Mise à jour des Pages HTML :**
   * Remplacement des liens vers `css/header.css` et `css/footer.css` par un import unique de `css/global.css` dans toutes les pages du site :
     * `index.html`
     * `apropos.html`
     * `forum.html`
     * `projets.html`
     * Les 9 pages dans le dossier `detail/` (liaison via `../css/global.css`).
3. **Nettoyage :**
   * Suppression des fichiers obsolètes `css/header.css` et `css/footer.css`.
   * Correction d'un lien brisé vers `../index.css` dans `detail/detailaffiche.html` et `detail/detailarticle.html`.
4. **Conservation spécifique :**
   * Conservation de `css/stylep.css` sous demande de l'utilisateur pour étude ultérieure.
   * Conservation de `css/stylec.css` (Calculatrice) et `css/stylem.css` (Générateur de maquette) car ce sont des feuilles de style pour des mini-applications autonomes.
