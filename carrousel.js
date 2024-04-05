let slideAtual = 0;
const totalSlides = 4;
const carrossel = document.querySelector('.carrossel');
const images = document.querySelectorAll('.carrossel-img');

function reiniciar() {
    const translateValue = -slideAtual * 100 + '%';
    carrossel.style.transform = 'translateX(' + translateValue + ')';
}


function changeSlide(direction) {
    slideAtual += direction;

    if (slideAtual <= 0) {
        slideAtual = totalSlides + - 1;
    } else if (slideAtual >= totalSlides) {
        slideAtual = 0;
    }

    reiniciar();
}

