function back() {
  window.open("./locales.html","_self")
}

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

/************************************************************/

var timeOut = 0;
var slideIndex = 0;
var autoOn = true;

const DEFAULT_ADDRESS = "Jose Pedro Varela 4862 ( CABA )"

autoSlides();

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


document.addEventListener('DOMContentLoaded', () => {
  let location = new URLSearchParams(window.location.search)
  let address = document.getElementsByClassName("address")[0].textContent = `${location.get('location') || DEFAULT_ADDRESS}`
})