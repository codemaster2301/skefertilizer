// Function to open WhatsApp with pre-filled message
function sendMessage() {
    var url = 'https://api.whatsapp.com/send?phone=+919482379110&text=hi';
    window.open(url, '_blank');
}

// Functionality for the text slideshow
const paragraphs = document.querySelectorAll('.slideshow p');
let currentIndex = 0;

function showNextParagraph() {
    paragraphs[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % paragraphs.length;
    paragraphs[currentIndex].classList.add('active');
}

// Change paragraph every 5 seconds
setInterval(showNextParagraph, 5000);

// Functionality for the image slider
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName('slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Initialize the image slider
showSlides();
