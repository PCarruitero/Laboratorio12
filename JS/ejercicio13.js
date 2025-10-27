function crearContador() {
    let contador = 0;
    return {
        incrementar: function() {
        contador++;
        return contador;
    },
    resetear: function() {
        contador = 0;
        return contador;
    }
  };
}
const miContador = crearContador();
console.log(miContador.incrementar());
console.log(miContador.incrementar()); 
console.log(miContador.resetear());  
console.log(miContador.incrementar());
