var Maria = {
    edad : 18,
    apellido: "Lopez",
    nombre: "Maria",
    genero: "Femenino",
    ingeniero: false,
    cantante: true,
    chef: true,
    turismo: false
}

function evaluarProfesion(persona){

    console.log(`Soy ${persona.nombre} y mi profesion es:`)
    if(persona.ingeniero){
        //ejecutamos 
        console.log("ingeniero")
    }else{
        console.log("no es ingeniero")
    }

    if(persona.cantante){
        console.log("cantante")
    }
    if(persona.chef){
        console.log("chef")
    }
    if(persona.turismo){
        console.log("turismo")
    }

}