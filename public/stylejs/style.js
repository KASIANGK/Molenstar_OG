function resetAnimation(element) {
    element.style.animation = 'none';
    element.offsetHeight; /* déclenche une répétition du rendu pour réinitialiser l'animation */
    element.style.animation = null;
}


function startAnimationLoop () {
    let htmlProgressBar = document.querySelector('.html');
    let cssProgressBar = document.querySelector('.css');
    let jsProgressBar = document.querySelector('.js');

    setInterval(() => {
        resetAnimation(htmlProgressBar);
        resetAnimation(cssProgressBar);
        resetAnimation(jsProgressBar);
    }, 4000);
}


document.addEventListener('DOMContentLoaded', startAnimationLoop);
