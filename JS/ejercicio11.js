let texto = prompt("Ingrese un texto:");
function procesarTexto(texto) {
  function limpiarEspacios(cadena) {
    return cadena.trim().replace(/\s+/g, " ");
  }
  function contarPalabras(cadena) {
    if (cadena === "") return 0;
    return cadena.split(" ").length;
  }
  const textoLimpio = limpiarEspacios(texto);
  const cantidad = contarPalabras(textoLimpio);
  console.log("Texto limpio:", textoLimpio);
  console.log("Cantidad de palabras:", cantidad);
}
