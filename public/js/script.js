//If para activar el foco de la ventana
document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
        document.title = "Departamentos | Mar del Plata";
        $("#favicon").attr("href", "images/favicon1.png");
    } else {
        document.title = "DPTOS || MAR DEL PLATA";
        $("#favicon").attr("href", "images/faviconX1.png");
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
 
  function productosEnElCarrito() {
    if (localStorage.carrito) {
      return JSON.parse(localStorage.carrito).length;
    } else {
      return 0;
    }
  }
  
  window.addEventListener("load", function () {
    /*  Animations initialization */
    new WOW().init();
  
    /* Toastr Initialization */
    toastr.options = {
      positionClass: "toast-bottom-right",
      fadeIn: 300,
      fadeOut: 1000,
      timeOut: 5000,
      extendedTimeOut: 1000,
    };
  
    /* Selecciono todos los productos de la página */
    let productos = document.querySelectorAll(".agregar_carrito");
  
    /* Creo un event listener por cada boton */
    productos.forEach((producto) => {
      producto.addEventListener("click", function (e) {
        if (localStorage.carrito) {
          let carrito = JSON.parse(localStorage.carrito);
          let index = carrito.findIndex((prod) => prod.id == e.target.dataset.id);
          if (index != -1) {
            carrito[index].quantity = carrito[index].quantity + 1;
          } else {
            carrito.push({ id: e.target.dataset.id, quantity: 1 });
          }
          localStorage.setItem("carrito", JSON.stringify(carrito));
        } else {
          localStorage.setItem(
            "carrito",
            JSON.stringify([{ id: e.target.dataset.id, quantity: 1 }])
          );
        }
        cartNumber.innerText = productosEnElCarrito();
        toastr.success("Se agregó este producto al carrito");
      });
    });
  
    /* Numero del carrito */
    let cartNumber = document.querySelector(".cart-number");
    cartNumber.innerText = productosEnElCarrito();
  });