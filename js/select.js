function back() {
  window.open("./locales.html","_self")
}

function openLink() {
  window.open("./number.html","_self") 
}

document.addEventListener('DOMContentLoaded', () => {
  var address = window.sessionStorage.getItem("address");

  document.getElementsByClassName("address")[0].textContent = address || `DEFAULT_ADDRESS`;
})