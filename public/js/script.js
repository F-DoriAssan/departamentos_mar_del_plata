//REalizamos un if para activar el foco de la ventana
document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
        document.title = "React | DoriAss.F";
        $("#favicon").attr("href", "images/favicon.png");
    } else {
        document.title = "REACT || DORIASS";
        $("#favicon").attr("href", "images/faviconX.png");
    }
})

// Inicio del loader
function loader() {
    document.querySelector(".loader-container").classList.add("fade-out");
  }
  function fadeOut() {
    setInterval(loader, 500);
  }
  window.onload = fadeOut;
  // fin del loader
 
