const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide() {
  slides[currentSlide].classList.remove('active-slide');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active-slide');
}

setInterval(showSlide, 3000); // Change image every 3 seconds
