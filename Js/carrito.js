  //Agregar y borrar prod del carrito (TELEFONOS)
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const lista = document.getElementById("lista-carrito");
  const total = document.getElementById("total");
  const btnVaciar = document.getElementById("vaciar-carrito");

  function mostrarCarrito() {
    lista.innerHTML = "";

    if (carrito.length === 0) {
      lista.innerHTML = "No hay productos en el carrito.";
      total.textContent = "";
      return;
    }

    let sumaTotal = 0;

    // Contenedor con clase .phone-listing
    const contenedor = document.createElement("section");
    contenedor.classList.add("phone-listing");

    carrito.forEach((producto, index) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.width = "14rem";

      card.innerHTML = `
        <img src="${producto.imagen || '/assets/default-phone.png'}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h3 class="card-title">${producto.nombre}</h3>
          <p class="card-text">Precio: $${producto.precio}</p>
          <button class="btn btn-danger btn-eliminar" data-index="${index}">Eliminar</button>
        </div>
      `;

      contenedor.appendChild(card);
      sumaTotal += producto.precio;
    });

    lista.appendChild(contenedor);
    total.textContent = `Total: $${sumaTotal}`;

    // Boton eliminar
    const botonesEliminar = document.querySelectorAll(".btn-eliminar");
    botonesEliminar.forEach((boton) => {
      boton.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        eliminarProducto(index);
      });
    });
  }

  function eliminarProducto(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
  }

  btnVaciar.addEventListener("click", () => {
    localStorage.removeItem("carrito");
    location.reload();
  });

  mostrarCarrito();





 