let texto = prompt("Ingrese un texto:");
const convertirAMayusculas = texto => texto.toUpperCase();
const agregarSigno = texto => texto + "!";
const componerTransformaciones = (texto, convertirAMayusculas, agregarSigno) => convertirAMayusculas(agregarSigno(texto));
console.log("Texto transformado: " + componerTransformaciones(texto, convertirAMayusculas, agregarSigno));