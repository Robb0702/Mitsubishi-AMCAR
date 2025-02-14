let currentIndex = 0;
const slides = document.querySelectorAll('.slider-image');
const totalSlides = slides.length;
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}
// Function to scroll the image row to the left by 3 images
// Function to scroll the image row to the left by 3 images


function updateSlider() {
  const offset = -currentIndex * 100.4;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;

  // Hide left button if on the first image
    if (currentIndex === 0) {
    leftButton.classList.add('hidden');
} else {
    leftButton.classList.remove('hidden');
}

  // Hide right button if on the last image
if (currentIndex === totalSlides - 1) {
    rightButton.classList.add('hidden');
} else {
    rightButton.classList.remove('hidden');
    }
}

setInterval(nextSlide, 3000000); // Automatically change slides every 3 seconds

// Initial update for buttons visibility
updateSlider();
