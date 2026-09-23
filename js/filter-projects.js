/**
 * Hub de Navigation Cyber - Système de Recherche et Filtrage Interactif
 * Portfolio de Melvin Mateta
 */

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('project-search');
    const clearSearchBtn = document.getElementById('clear-search');
    const filterTagsContainer = document.getElementById('filter-tags');
    const resultsCountEl = document.getElementById('results-count');
    const resetFiltersBtn = document.getElementById('reset-filters');
    const emptyStateEl = document.getElementById('no-results');
    const emptyStateResetBtn = document.getElementById('empty-state-reset');
    const categoryBlocks = document.querySelectorAll('.category-block');
    const cardElements = document.querySelectorAll('.card');

    if (!cardElements.length) return;

    // État courant des filtres
    let currentTag = 'all';
    let currentSearch = '';

    // Fonction de normalisation pour la recherche insensible à la casse et aux accents
    const normalize = (str) => {
        return (str || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .trim();
    };

    // Extraction et indexation des données de chaque carte
    const projectsData = Array.from(cardElements).map((card) => {
        const titleEl = card.querySelector('.card-title');
        const textEl = card.querySelector('.card-text');
        const badgeEls = card.querySelectorAll('.badge');
        
        const title = titleEl ? titleEl.textContent : '';
        const text = textEl ? textEl.textContent : '';
        const badges = Array.from(badgeEls).map(b => b.textContent.trim());
        const categoryBlock = card.closest('.category-block');

        return {
            element: card,
            categoryBlock,
            title,
            text,
            badges,
            normalizedTitle: normalize(title),
            normalizedText: normalize(text),
            normalizedBadges: badges.map(b => normalize(b)),
            rawBadgesLower: badges.map(b => b.toLowerCase())
        };
    });

    // Décompte de la fréquence de chaque badge technologique
    const badgeCounts = {};
    projectsData.forEach(p => {
        p.badges.forEach(badge => {
            badgeCounts[badge] = (badgeCounts[badge] || 0) + 1;
        });
    });

    // Tri des badges par popularité (fréquence décroissante), puis alphabétique
    const sortedBadges = Object.keys(badgeCounts).sort((a, b) => {
        const diff = badgeCounts[b] - badgeCounts[a];
        if (diff !== 0) return diff;
        return a.localeCompare(b);
    });

    // Génération dynamique des boutons de filtre
    const buildFilterButtons = () => {
        if (!filterTagsContainer) return;
        filterTagsContainer.innerHTML = '';

        // Bouton 'Tous'
        const allBtn = document.createElement('button');
        allBtn.type = 'button';
        allBtn.className = 'filter-tag-btn is-active';
        allBtn.dataset.tag = 'all';
        allBtn.innerHTML = `Tous <span class="tag-count">${projectsData.length}</span>`;
        filterTagsContainer.appendChild(allBtn);

        // Boutons par technologie
        sortedBadges.forEach(badgeName => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'filter-tag-btn';
            btn.dataset.tag = badgeName;
            btn.innerHTML = `${badgeName} <span class="tag-count">${badgeCounts[badgeName]}</span>`;
            filterTagsContainer.appendChild(btn);
        });
    };

    buildFilterButtons();

    // Mise à jour de l'URL sans rechargement
    const updateUrlParams = () => {
        const url = new URL(window.location.href);
        if (currentTag && currentTag !== 'all') {
            url.searchParams.set('tag', currentTag);
        } else {
            url.searchParams.delete('tag');
        }

        if (currentSearch) {
            url.searchParams.set('search', currentSearch);
        } else {
            url.searchParams.delete('search');
        }

        const newUrl = url.pathname + (url.searchParams.toString() ? '?' + url.searchParams.toString() : '');
        window.history.replaceState({ tag: currentTag, search: currentSearch }, '', newUrl);
    };

    // Application du filtre global (recherche + tag)
    const applyFilters = () => {
        const normalizedQuery = normalize(currentSearch);
        let visibleCount = 0;

        projectsData.forEach(project => {
            // Correspondance du tag
            let matchesTag = false;
            if (currentTag === 'all') {
                matchesTag = true;
            } else {
                const targetTagLower = currentTag.toLowerCase();
                matchesTag = project.rawBadgesLower.includes(targetTagLower);
            }

            // Correspondance du texte de recherche
            let matchesSearch = true;
            if (normalizedQuery) {
                const inTitle = project.normalizedTitle.includes(normalizedQuery);
                const inText = project.normalizedText.includes(normalizedQuery);
                const inBadges = project.normalizedBadges.some(b => b.includes(normalizedQuery));
                matchesSearch = inTitle || inText || inBadges;
            }

            const isVisible = matchesTag && matchesSearch;

            if (isVisible) {
                project.element.classList.remove('is-hidden');
                visibleCount++;
            } else {
                project.element.classList.add('is-hidden');
            }
        });

        // Gestion de la visibilité des blocs de catégories
        categoryBlocks.forEach(block => {
            const visibleCardsInBlock = block.querySelectorAll('.card:not(.is-hidden)');
            if (visibleCardsInBlock.length === 0) {
                block.classList.add('is-hidden');
            } else {
                block.classList.remove('is-hidden');
            }
        });

        // Mise à jour du message de comptage
        if (resultsCountEl) {
            if (currentTag === 'all' && !normalizedQuery) {
                resultsCountEl.textContent = `Affichage de l'ensemble des ${projectsData.length} projets`;
            } else if (visibleCount === 0) {
                resultsCountEl.textContent = `0 projet trouvé`;
            } else if (visibleCount === 1) {
                let context = currentTag !== 'all' ? ` avec le tag « ${currentTag} »` : '';
                if (normalizedQuery) context += ` pour « ${currentSearch} »`;
                resultsCountEl.textContent = `1 projet trouvé${context}`;
            } else {
                let context = currentTag !== 'all' ? ` avec le tag « ${currentTag} »` : '';
                if (normalizedQuery) context += ` pour « ${currentSearch} »`;
                resultsCountEl.textContent = `${visibleCount} projets trouvés${context}`;
            }
        }

        // Affichage de l'état vide si aucun résultat
        if (emptyStateEl) {
            if (visibleCount === 0) {
                emptyStateEl.style.display = 'block';
            } else {
                emptyStateEl.style.display = 'none';
            }
        }

        // Affichage des boutons de réinitialisation et de clear
        const isFiltered = currentTag !== 'all' || Boolean(currentSearch);
        if (resetFiltersBtn) {
            resetFiltersBtn.style.display = isFiltered ? 'inline-flex' : 'none';
        }
        if (clearSearchBtn) {
            clearSearchBtn.style.display = currentSearch ? 'inline-flex' : 'none';
        }

        // Mise à jour de l'état actif des boutons de tags
        if (filterTagsContainer) {
            const buttons = filterTagsContainer.querySelectorAll('.filter-tag-btn');
            buttons.forEach(btn => {
                const btnTag = btn.dataset.tag;
                if (btnTag.toLowerCase() === currentTag.toLowerCase()) {
                    btn.classList.add('is-active');
                    btn.setAttribute('aria-pressed', 'true');
                } else {
                    btn.classList.remove('is-active');
                    btn.setAttribute('aria-pressed', 'false');
                }
            });
        }

        updateUrlParams();
    };

    // Sélection d'un tag
    const selectTag = (tag) => {
        currentTag = tag || 'all';
        applyFilters();
    };

    // Réinitialisation complète
    const resetAllFilters = () => {
        currentTag = 'all';
        currentSearch = '';
        if (searchInput) searchInput.value = '';
        applyFilters();
    };

    // Événement clic sur la barre de tags
    if (filterTagsContainer) {
        filterTagsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-tag-btn');
            if (!btn) return;
            const tag = btn.dataset.tag;
            selectTag(tag);
        });
    }

    // Événement saisie dans la barre de recherche
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.trim();
            applyFilters();
        });

        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchInput.value = '';
                currentSearch = '';
                applyFilters();
            }
        });
    }

    // Événement bouton d'effacement de la recherche
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
                searchInput.focus();
            }
            currentSearch = '';
            applyFilters();
        });
    }

    // Événement boutons de réinitialisation
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', resetAllFilters);
    }
    if (emptyStateResetBtn) {
        emptyStateResetBtn.addEventListener('click', resetAllFilters);
    }

    // Rendre les badges à l'intérieur des cartes interactifs
    document.querySelectorAll('.card .badge').forEach(badge => {
        badge.style.cursor = 'pointer';
        badge.setAttribute('title', `Filtrer par ${badge.textContent.trim()}`);
        badge.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const tagText = badge.textContent.trim();
            selectTag(tagText);
            
            // Scroll fluide vers la barre de filtres si nécessaire
            const filterSection = document.querySelector('.filter-section');
            if (filterSection) {
                filterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Gestion de l'historique et des paramètres d'URL au chargement initial
    const parseInitialUrlParams = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const tagParam = urlParams.get('tag');
        const searchParam = urlParams.get('search');

        if (tagParam) {
            // Vérifier si le tag existe parmi les badges ou utiliser sa valeur
            const matchingBadge = sortedBadges.find(b => b.toLowerCase() === tagParam.toLowerCase());
            currentTag = matchingBadge || tagParam;
        }

        if (searchParam) {
            currentSearch = searchParam;
            if (searchInput) searchInput.value = searchParam;
        }

        applyFilters();
    };

    // Navigation retour/avant du navigateur
    window.addEventListener('popstate', (e) => {
        if (e.state) {
            currentTag = e.state.tag || 'all';
            currentSearch = e.state.search || '';
            if (searchInput) searchInput.value = currentSearch;
            applyFilters();
        } else {
            parseInitialUrlParams();
        }
    });

    // Exécution initiale
    parseInitialUrlParams();
});
