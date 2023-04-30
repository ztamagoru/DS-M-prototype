function openLink() {
    window.open("./locales.html","_self")
}

function popup() {
    var showed = window.sessionStorage.getItem("popupshowed");

    if (showed == null) {
        alert ("Esta página ha sido pensada para ser vista desde un teléfono móvil.")
        window.sessionStorage.setItem("popupshowed", true);
    }
}