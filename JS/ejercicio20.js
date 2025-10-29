function descargarArchivo(url, callback) {
    console.log("Descargando...");
    callback(url);
}
let url = prompt("Ingrese la URL del archivo a descargar:");
descargarArchivo(url, function(archivo) {
    console.log(`Descarga completa de ${archivo}`);
});
