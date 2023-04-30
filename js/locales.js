function openLink() {
  window.open("./select.html","_self")
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

function buttonPressed(div) {
  if (document.getElementById(div.id).style.backgroundColor === "rgb(227, 31, 43)") {
    document.getElementById(div.id).style.backgroundColor = "white";
    document.getElementById(div.id).style.color = "rgb(227, 31, 43)";
  } else {
    document.getElementById(div.id).style.backgroundColor = "rgb(227, 31, 43)";
    document.getElementById(div.id).style.color = "white";
  }
}

/************************************************************/

var finaladdress;

function addressChange(div){
  var id = div.id;
  var text = document.getElementById(id).getElementsByClassName("address")[0];

  finaladdress = text.textContent;
  console.log(finaladdress);

  window.open(`./select.html?location=${encodeURIComponent(finaladdress)}`,"_self")
}