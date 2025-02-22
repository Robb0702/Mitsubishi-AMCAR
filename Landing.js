let currentIndex = 0;
const slides = document.querySelectorAll('.slider-image');
const totalSlides = slides.length;
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const dropdownMenus = document.querySelectorAll('.dropdown');
const form = document.querySelector('#mirage-form'); // Target the form with id 'mirage-form'

// Function to toggle the form visibility
function toggleForm() {
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function updateSlider() {
    const offset = -currentIndex * 100.4;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;

    if (currentIndex === 0) {
        leftButton.classList.add('hidden');
    } else {
        leftButton.classList.remove('hidden');
    }

    if (currentIndex === totalSlides - 1) {
        rightButton.classList.add('hidden');
    } else {
        rightButton.classList.remove('hidden');
    }
}

setInterval(nextSlide, 3000);

updateSlider();

dropdownMenus.forEach(function (dropdownMenu) {
    const dropdownContent = dropdownMenu.querySelector('.dropdown-content');
    const icon = dropdownMenu.querySelector('.icon');

    dropdownMenu.addEventListener('click', function (e) {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';

        if (dropdownContent.style.display === 'block') {
            icon.setAttribute('name', 'chevron-up-outline');
        } else {
            icon.setAttribute('name', 'chevron-down-outline');
        }
    });

    document.addEventListener('click', function (e) {
        if (!dropdownMenu.contains(e.target)) {
            dropdownContent.style.display = 'none';
            icon.setAttribute('name', 'chevron-down-outline');
        }
    });
});

// Event listener for the "Mirage" link
document.getElementById('mirage-link').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default link behavior

    // Show the Mirage form container when clicking the "Mirage" link
    const mirageFormContainer = document.querySelector(".mirage-form-container");
    mirageFormContainer.classList.toggle("hidden");
});



// Select all images in the image grid (optional, if you want other images to toggle form)
const allImages = document.querySelectorAll('.image-item');

// Loop through all images and add event listener to toggle the form
allImages.forEach(function (image) {
    image.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default image click behavior (e.g., navigation)
        toggleForm(); // Toggle the form visibility
    });
});
