function openLink() {
  window.open("./select.html","_self")
}

function buttonPressed(div) {
  var id = div.id;

  if (document.getElementById(id).style.backgroundColor === "rgb(227, 31, 43)") {
    document.getElementById(id).style.backgroundColor = "white";
    document.getElementById(id).style.color = "rgb(227, 31, 43)";
  } else {
    document.getElementById(id).style.backgroundColor = "rgb(227, 31, 43)";
    document.getElementById(id).style.color = "white";
  }
}

var finaladdress;

function addressChange(div){
  var id = div.id;
  var text = document.getElementById(id).getElementsByClassName("address")[0];

  finaladdress = text.textContent;

  window.sessionStorage.setItem("local", finaladdress);
  window.open("./select.html", "_self")
}