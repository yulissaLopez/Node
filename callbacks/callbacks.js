// CALLBACKS : es una FUNCION que se pasa a otrea funcion como argumento, la cual se invoca 
// dentro de la funcion despues de completar alguna operacion

//Funcion de orden Superior 
function crearCita(cita, funcionQueseLLama){
    let miCita = "Como yo siempre digo " + cita;
    funcionQueseLLama(miCita)
}

// Funcion callback
function logCita(cita){
    console.log(cita);
}


//crearCita("Ojo de loca, No se equivoca", logCita);

// Podemos pasar funciones anonimas como callbacks 
crearCita("cada loco con su costal" , function(cita){
    console.log(cita);
})

