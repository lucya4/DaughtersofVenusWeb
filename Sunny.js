const menu = document.querySelector('#mobile_menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});


// === CAROUSEL FUNCTIONALITY ===
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const dots = Array.from(document.querySelectorAll('.carousel-indicator'));
  const nextButton = document.querySelector('.carousel-button--right');
  const prevButton = document.querySelector('.carousel-button--left');

  let currentIndex = 0;
  const slideWidth = slides[0].getBoundingClientRect().width;

  // Arrange slides horizontally
  slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
  });

  // Move to slide
  const moveToSlide = (index) => {
    track.style.transform = `translateX(-${slideWidth * index}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentIndex = index;
  };

  // Next slide
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    moveToSlide(currentIndex);
  });

  // Previous slide
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(currentIndex);
  });

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => moveToSlide(index));
  });

  // Auto-advance (optional)
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    moveToSlide(currentIndex);
  }, 5000);
});
