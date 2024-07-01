// USAR UN CALLBACK DE MANERA ASINCRONA
// POR QUE USAR CALLBACKS? cuando no sabemos cuando se nos devolver una respuesta y no queremos que la aplicacion se detenga

// FUNCION QUE SIMULA UNA SOLICITUD A UN SERVIDOR
function solicitudServidor(consulta, callback){
    setTimeout(function(){
        let respuesta = consulta + "lleno";
        callback(respuesta);
    }, 5000)
    console.log("esperando...")
    console.log("espera un poco mas..")
}

function obtenerResultados(resultados){
    console.log("Respuesta del servidor: " + resultados);
}

solicitudServidor("El vaso esta medio ", obtenerResultados);