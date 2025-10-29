function crearSecuencia(inicio, paso) {
    let actual = inicio; 
    return function() {
        let valor = actual;
        actual += paso;
        return valor;
    };
}
let inicio = parseFloat(prompt("Ingrese el número inicial de la secuencia:"));
let paso = parseFloat(prompt("Ingrese el valor del paso:"));
let secuencia = crearSecuencia(inicio, paso);
console.log("Primer valor:", secuencia());
console.log("Segundo valor:", secuencia());
console.log("Tercer valor:", secuencia());
console.log("Cuarto valor:", secuencia());
