// Obtén los elementos del carrusel
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');

// Calcula el ancho de cada elemento del carrusel
const itemWidth = carouselItems[0].clientWidth;

// Inicializa la posición del carrusel
let currentPosition = 0;

// Agrega eventos de clic para mover el carrusel
document.querySelector('.prev-btn').addEventListener('click', () => {
  currentPosition += itemWidth;
  carouselContainer.style.transform = `translateX(${currentPosition}px)`;
});

document.querySelector('.next-btn').addEventListener('click', () => {
  currentPosition -= itemWidth;
  carouselContainer.style.transform = `translateX(${currentPosition}px)`;
});
