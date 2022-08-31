let nombre;
let edad;

function solicitarNombre() {
  nombre = prompt("Ingrese su nombre de usuario");
  console.log(`Bienvenido ${nombre}`);
}

function solicitarEdad() {
  edad = Number(prompt("Ingrese su edad"));
}

solicitarNombre();
solicitarEdad();

if (edad >= 18) {
  alert(`Bienvenido a nuestra tienda`);

  let option = prompt(`Eliga una sección:

 1: Cervezas
 2: Vinos
 3: Whisky
 4: Vodka
 `);

  switch (option) {
    case "1":
      alert("Tienes un 5% de descuento con tarjeta de credito HSBC");
      break;
    case "2":
      alert("Tienes un 10% de descuento con tarjeta de credito Galicia");
      break;
    case "3":
      alert("Tienes un 20% de decuento con transferrencia bancaria");
      break;
    case "4":
      alert("Tienes un 5% de decuento con transferencia bancaria");
      break;
    default:
      alert("No ingresaste una opción valida");
      break;
  }

  let Cervezas = 700;
  let Vinos = 2000;
  let Whisky = 4000;
  let Vodka = 2400;

  let cantidad = Number(prompt("Ingrese la cantidad de productos que desea"));

  let precioCerveza = cantidad * (Cervezas * 0.95);
  let precioVinos = cantidad * (Vinos * 0.90 );
  let precioWhisky = cantidad * (Whisky * 0.80);
  let precioVodka = cantidad * (Vodka * 0.95);

  switch (option) {
    case "1":
        alert (`El costo de tu pedido es de: ${precioCerveza}`);
      break;
    case "2":
      alert (`El costo de tu pedido es de: ${precioVinos}`);
      break;
    case "3":
      alert (`El costo de tu pedido es de: ${precioWhisky}`);
      break;
    case "4":
      alert (`El costo de tu pedido es de: ${precioVodka}`);
      break;
    default:
      alert("No ingresaste una opción valida");
      break;
  }
} else {
  alert(`No puede consumir alcohol con ${edad} años`);
}