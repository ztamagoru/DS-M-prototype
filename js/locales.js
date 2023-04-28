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

/************************************************************/

var finaladdress;

function addressChange(div){
  var id = div.id;
  var text = document.getElementById(id).getElementsByClassName("address")[0];  

  finaladdress = text.textContent;
  console.log(finaladdress);

  window.open(`./select.html?location=${encodeURIComponent(finaladdress)}`,"_self")


}

