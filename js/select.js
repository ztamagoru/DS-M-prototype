function back() {
  window.open("./locales.html","_self")
}

function openLink() {
  window.open("./number.html","_self") 
}

document.addEventListener('DOMContentLoaded', () => {
  
})

function getAddress() {
  var localSeleccionado = window.sessionStorage.getItem("local");

  document.getElementsByClassName("address")[0].textContent = localSeleccionado.trim() || `DEFAULT_ADDRESS`;
}