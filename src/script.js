window.addEventListener('load', function() {
    const animatedLogo = document.getElementById('animatedLogo');
    const staticLogo = document.getElementById('staticLogo');

    // Change 5000 to the duration you want (in milliseconds)
    setTimeout(function() {
        animatedLogo.classList.add('hidden');
        staticLogo.classList.remove('hidden');
    }, 3000); // 5 seconds
});