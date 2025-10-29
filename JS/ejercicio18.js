function ejecutarOperacion(operacion, x, y) {
    return operacion(x, y);
}
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;
let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division): ");
let num1 = parseFloat(prompt("Ingrese el primer número: "));
let num2 = parseFloat(prompt("Ingrese el segundo número: "));
console.log("Resultado: " + ejecutarOperacion(operacion, num1, num2));