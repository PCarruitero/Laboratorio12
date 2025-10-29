function acumulador(valorInicial) {
    let total = valorInicial;
    return function(nuevoValor) {
        total += nuevoValor;
        return total;
    };
}
let n = parseInt(prompt("Ingrese el número de veces para acumular: "));
let valorInicial = parseFloat(prompt("Ingrese el valor inicial: "));
let acumular = acumulador(valorInicial);
for (let i = 0; i < n; i++) {
    let valor = parseFloat(prompt(`Ingrese el valor ${i + 1}: `));
    let resultado = acumular(valor);
    console.log(`Total acumulado: ${resultado}`);
}