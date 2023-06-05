const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    // change the theme of the website
    document.body.classList.toggle('dark');
});

var preloader = document.querySelector(".preloader") 

window.addEventListener("load", vanish);

function vanish() {
    preloader.classList.add("disappear")
}

let slideIndex = 1;
let slideTimer;

showSlides(slideIndex);
startSlideTimer();

function plusSlides(n) {
    showSlides(slideIndex += n);
    resetSlideTimer();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    resetSlideTimer();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function startSlideTimer() {
    slideTimer = setInterval(function() {
        showSlides(slideIndex += 1);
    }, 5000);
}

function resetSlideTimer() {
    clearInterval(slideTimer);
    startSlideTimer();
}

