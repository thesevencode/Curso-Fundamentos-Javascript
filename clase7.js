//Funciones Retornables
var Maria = {
    edad : 18,
    apellido: "Lopez",
    nombre: "Maria",
    genero: "Femenino"
}

var Luis = {
    edad: 15,
    nombre: "Luis",
    apellido: "Quispe",
    genero: "Masculino"
}

const MAYOR_EDAD = 18
function evaluarEdad(edad){
    return edad >= MAYOR_EDAD ? true : false//true
}

function imprimirSiEsMayorEdad(persona){

    if(evaluarEdad(persona.edad)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}
//RETO: FUNCION QUE IMPRIMA SI ES MENOR EDAD
function imprimirSiEsMenorEdad(persona){
    //soy menor de edad
    if(!evaluarEdad(persona.edad)) console.log("Soy menor de edad")
    

}