function filtrarArreglo(arr, callback) {
    const resultado = [];
    for (let i = 0; i < arr.length; i++) {
        const elemento = arr[i];
        if (callback(elemento, i, arr)) {
            resultado.push(elemento);
        }
    }
    return resultado;
}
