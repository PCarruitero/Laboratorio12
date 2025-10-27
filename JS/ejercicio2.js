let ancho = parseFloat(prompt("Ingresa el ancho del rectángulo:"));
let alto = parseFloat(prompt("Ingresa el alto del rectángulo:"));
function areaRectangulo(ancho, alto) {
    return ancho * alto;
}
console.log("El área del rectángulo es : " + areaRectangulo(ancho, alto));