window.addEventListener('load', function() {
    const animatedLogo = document.getElementById('animatedLogo');
    const staticLogo = document.getElementById('staticLogo');

    
    setTimeout(function() {
        animatedLogo.classList.add('hidden');
        staticLogo.classList.remove('hidden');
    }, 3000); 
});