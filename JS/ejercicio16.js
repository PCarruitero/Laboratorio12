function media (...numeros) {
    let suma = 0;
    for (let num of numeros) {
        suma += num;
    }
    return suma / numeros.length;
}
let cantidad = parseInt(prompt("Ingrese la cantidad de números para calcular la media: "));
let numeros = [];
for (let i = 0; i < cantidad; i++) {
    let valor = parseFloat(prompt("Ingrese el número " + (i+1) + ": "));
    numeros.push(valor);
}
console.log("La media es: " + media(...numeros));
