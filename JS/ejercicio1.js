let numero = parseFloat(prompt("Ingresa un número:"));
function esPar(num) {
    return num % 2 === 0;
}
if (esPar(numero)) {
    console.log("El número " + numero + " es par.");
} else {
    console.log("El número " + numero + " es impar.");
}