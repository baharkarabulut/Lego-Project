const menuToggle = document.getElementById('menu-toggle');
const menuDropdown = document.getElementById('menu-dropdown');
const menuIcon = document.querySelector('.menu-icon i');

menuToggle.addEventListener('click', function() {
  menuDropdown.classList.toggle('show');
  menuIcon.classList.toggle('bx-menu-alt-left');
  menuIcon.classList.toggle('bx-x');
});

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[currentSlide].classList.add('active');
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

// Otomatik Geçiş
setInterval(nextSlide, 5000);

