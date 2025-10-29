function potencia(base, exponente) {
  if (exponente === 0) {
    return 1;
  }
  return base * potencia(base, exponente - 1);
}
let base = parseFloat(prompt("Ingrese la base: "));
let exponente = parseInt(prompt("Ingrese el exponente (entero no negativo): "));
console.log(`${base} elevado a la ${exponente} es: ` + potencia(base, exponente));