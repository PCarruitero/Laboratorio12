function mostrarDatos(nombre, edad, ...hobbies) {
    console.log("Nombre: " + nombre);
    console.log("Edad: " + edad);
    console.log("Hobbies: " + hobbies.join(", "));
}
let nombre = prompt("Ingrese su nombre: ");
let edad = parseInt(prompt("Ingrese su edad: "));
let cantidadHobbies = parseInt(prompt("¿Cuántos hobbies desea ingresar? "));
let hobbies = [];
for (let i = 0; i < cantidadHobbies; i++) {
    let hobby = prompt("Ingrese el hobby " + (i + 1) + ": ");
    hobbies.push(hobby);
}
mostrarDatos(nombre, edad, ...hobbies);