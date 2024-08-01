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

document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour déterminer la section active
    function setActiveLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    // Ajouter l'événement de défilement pour détecter la section active
    window.addEventListener('scroll', setActiveLink);
    setActiveLink(); // Pour définir le lien actif au chargement de la page
});