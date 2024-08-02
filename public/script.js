window.addEventListener('load', function() {
    const animatedLogo = document.getElementById('animatedLogo');
    const staticLogo = document.getElementById('staticLogo');
    const initialLogoWidthPercentage = 20;
    const finalLogoWidthPercentage = 5;
    const scrollCountThreshold = 5;
    const scrollIncrementThreshold = 100;
    let scrollCount = 0;

    setTimeout(function() {
        animatedLogo.classList.add('hidden');
        staticLogo.classList.remove('hidden');
    }, 3000);

    function adjustLogoWidth() {
        const windowWidth = window.innerWidth;
        const initialLogoWidth = windowWidth * (initialLogoWidthPercentage / 100);
        const finalLogoWidth = windowWidth * (finalLogoWidthPercentage / 100);

        if (scrollCount < scrollCountThreshold) {
            let newWidth = initialLogoWidth - (scrollCount * (initialLogoWidth - finalLogoWidth) / scrollCountThreshold);
            newWidth = Math.max(newWidth, finalLogoWidth);
            staticLogo.style.width = newWidth + 'px';
        }

        if (scrollCount >= scrollCountThreshold) {
            staticLogo.classList.add('fixed');
            staticLogo.style.width = finalLogoWidth + 'px';
        } else {
            staticLogo.classList.remove('fixed');
        }
    }

    window.addEventListener('scroll', function() {
        scrollCount = Math.floor(window.scrollY / scrollIncrementThreshold);
        adjustLogoWidth();
    });

    window.addEventListener('resize', adjustLogoWidth);
    adjustLogoWidth();
});

document.addEventListener('DOMContentLoaded', function() {
    function setActiveLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    window.addEventListener('scroll', setActiveLink);
    setActiveLink();
});