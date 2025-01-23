let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    
    updateSlidePosition();
}

function updateSlidePosition() {
    const slides = document.querySelectorAll('.slide');
    const newTransformValue = -currentSlide * 320 + 'px';
    document.querySelector('.slider').style.transform = `translateX(${newTransformValue})`;
}