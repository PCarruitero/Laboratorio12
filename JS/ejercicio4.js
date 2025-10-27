let a = parseFloat(prompt("Ingrese un primer número:"));
let b = parseFloat(prompt("Ingrese un segundo número:"));
let c = parseFloat(prompt("Ingrese un tercer número:"));
function mayorDeTres(a, b, c) {
    return Math.max(a, b, c);
}
console.log("El mayor de los 3 números es: " + mayorDeTres(a, b, c));