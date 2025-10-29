let nombre = prompt("Ingrese el nombre del amigo:");
function saludo(nombre = "Amigo") {
    console.log("Hola, " + nombre);
}
saludo(nombre);