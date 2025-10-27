let numero = parseFloat(prompt("Ingrese un número:"));
const esPositivo = numero => numero >= 0;
if (esPositivo(numero)) {
    console.log("El número " + numero + " es positivo");
} else {
    console.log("El número " + numero + " es negativo");
}