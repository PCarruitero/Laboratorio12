let precio = parseFloat(prompt("Ingrese el precio del producto:"));
let descuento = parseFloat(prompt("ingrese el % de descuento:"));
const calcularDescuento = function(precio, descuento) {
    return precio - ((precio * descuento) / 100);
}
console.log("El precio con descuento es: " + calcularDescuento(precio, descuento));