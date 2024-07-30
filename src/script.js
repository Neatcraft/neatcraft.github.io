window.addEventListener('load', function() {
    const animatedLogo = document.getElementById('animatedLogo');
    const staticLogo = document.getElementById('staticLogo');
    const initialLogoWidth = 500; // Largeur initiale du logo en px
    const finalLogoWidth = 50; // Largeur finale du logo en px
    const scrollCountThreshold = 5; // Nombre de défilements nécessaires avant fixation
    const scrollIncrementThreshold = 100; // Pixels parcourus pour chaque défilement
    let scrollCount = 0; // Compteur de défilements

    // Remplacer le logo animé par le logo statique après 3 secondes
    setTimeout(function() {
        animatedLogo.classList.add('hidden');
        staticLogo.classList.remove('hidden');
    }, 3000);

    window.addEventListener('scroll', function() {
        // Augmenter le compteur de défilements basé sur le défilement de la page
        scrollCount = Math.floor(window.scrollY / scrollIncrementThreshold);

        // Réduction progressive de la taille du logo
        if (scrollCount < scrollCountThreshold) {
            let newWidth = initialLogoWidth - (scrollCount * (initialLogoWidth - finalLogoWidth) / scrollCountThreshold);
            newWidth = Math.max(newWidth, finalLogoWidth); // Empêcher le logo de devenir trop petit
            staticLogo.style.width = newWidth + 'px';
        } 

        // Fixer le logo dans le header après le seuil de défilement
        if (scrollCount >= scrollCountThreshold) {
            staticLogo.classList.add('fixed');
            staticLogo.style.width = finalLogoWidth + 'px'; // Assurer la taille finale
        } else {
            staticLogo.classList.remove('fixed');
        }
    });
});