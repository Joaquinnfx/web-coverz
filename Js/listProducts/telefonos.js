// Array de productos con nombre y precio
const productos = [
  { nombre: "Iphone 14 Pro Max", precio: 949900 },
  { nombre: "Iphone 13", precio: 799000 },
  { nombre: "Iphone 15 Pro Max", precio: 1099000 },
  { nombre: "Samsung Galaxy S21", precio: 720000 },
  { nombre: "Samsung Galaxy S24 Ultra", precio: 1249900 },
  { nombre: "Motorola G54", precio: 449000 },
  { nombre: "Motorola G85", precio: 519900 }
];

// Cargar el carrito desde localStorage o iniciar vacío
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Seleccionar todos los botones "Agregar al carrito"
const botones = document.querySelectorAll(".btn.btn-primary");

botones.forEach((boton, index) => {
  boton.addEventListener("click", (e) => {
    e.preventDefault(); // Previene que se redireccione aún

    const producto = productos[index];
    carrito.push(producto);

    // Guardar en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Redirigir al carrito después de agregar (opcional)
    //window.location.href = "carrito.html";
  });
});
