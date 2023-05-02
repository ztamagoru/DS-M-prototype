function openNav() {
    document.getElementById("mySidenav").style.width = "80%"; 
    document.body.style.backgroundColor = "#A3141E";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "#e31f2b";
}

function homeButton() {
    window.open("./index.html","_self") 
}

var timeOut = 0;
var slideIndex = 0;
var autoOn = true;

document.addEventListener('DOMContentLoaded', autoSlides);

function autoSlides() {
    timeOut = timeOut - 20;
    
    if (autoOn == true && timeOut < 0) {
        showSlides();
    }
    setTimeout(autoSlides, 20);
}

function showSlides() {
    
    timeOut = 2000;
    
    var slides = document.getElementsByClassName("slideshow");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
}
