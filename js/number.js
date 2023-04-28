function openNav() {
    document.getElementById("mySidenav").style.width = "80%"; 
    document.body.style.backgroundColor = "#CCCCCC";
    document.getElementsByClassName("header-background")[0].style.backgroundColor = "#A3141E";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "#FFFFFF";
    document.getElementsByClassName("header-background")[0].style.backgroundColor = "#e31f2b";
}

function homeButton() {
    window.open("./index.html","_self") 
}

function 