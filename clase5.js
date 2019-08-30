//Objetos
var nombreLuis = "Luis"
var apellidoLuis = "Quispe"



var Luis = {
    edad : 21,
    apellido: "Quispe",
    nombre: "luis",
    genero: "Masculino",
    saludar: function(){ 
        console.log('Hola bienvenido')
    },
    altura: 1.78,
    ex: {
        nombre: 'Patricia'
    }
}

var Maria = {
    edad : 18,
    apellido: "Lopez",
    nombre: "Maria",
    genero: "Femenino"
}

function imprimirNombre(persona){
    var { nombre, apellido } = persona //Desestructurar objetos

    //Luis Quispe
    console.log(`${nombre} ${apellido}`)
}

function imprimir(persona){
    var {nombre, edad, genero} = persona 
    //Soy Maria tengo 18 años y mi genero es femenino
    console.log(`Soy ${nombre.toUpperCase()} tengo ${edad+=10} y mi genero es ${genero}`)

}

imprimirNombre(Maria)
imprimir(Luis)