let numero = parseInt(prompt("Ingrese un número entero: "));
let multiplo = parseInt(prompt("Ingrese un númeor para ver si es múltiplo: "));
function esMultiplo(numero, multiplo) {
    return numero % multiplo === 0;
}
if (esMultiplo(numero, multiplo)) {
    console.log("El número " + numero + " es múltiplo de " + multiplo);
} else { 
    console.log("El número " + numero + " no es múltiplo de " + multiplo);
}