let num1 = parseInt(prompt("Ingrese un número:"));
let num2 = parseInt(prompt("Ingrese otro número:"));
function operacionesMatematicas(num1, num2) {
    const suma = (num1, num2) => num1 + num2;
    const resta = (num1, num2) => num1 - num2;
    const multiplicacion = (num1, num2) => num1 * num2;
    const division = (num1, num2) => num1 / num2;
    const modulo = (num1, num2) => num1 % num2;
    const potencia = (num1, num2) => num1 ** num2;
    console.log("Suma: " + suma(num1, num2));
    console.log("Resta: " + resta(num1, num2));
    console.log("Multiplicación: " + multiplicacion(num1, num2));
    console.log("División: " + division(num1, num2));
    console.log("Módulo: " + modulo(num1, num2));
    console.log("Potencia: " + potencia(num1, num2));
}
operacionesMatematicas(num1, num2);