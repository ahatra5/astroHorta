let currentIndex = 0;
const totalSlides = 4;
const carrossel = document.querySelector('.carrossel');
const images = document.querySelectorAll('.carrossel-img');

function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    updateCarrossel();
}

function updateCarrossel() {
    const translateValue = -currentIndex * 100 + '%';
    carrossel.style.transform = 'translateX(' + translateValue + ')';
}

// Adicionando um evento de transição para verificar quando a transição termina
carrossel.addEventListener('transitionend', () => {
    // Exibindo a imagem atual
    images[currentIndex].style.opacity = '1';
});


// Definindo a opacidade inicial da primeira imagem
images[0].style.opacity = '1';
images[1].style.opacity = '1';
images[2].style.opacity = '1';
images[3].style.opacity = '1';

// Chamando a função updateCarrossel inicialmente para exibir a primeira imagem
updateCarrossel();
