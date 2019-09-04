var Luis = {
    nombre: "Luis",
    apellido: "Quispe",
    altura: 1.60, //metros
    edad: 15
}

var Maria = {
    nombre: "Maria",
    apellido: "Diaz",
    altura: 1.45, //metros
    edad: 21
}

var Andres = {
    nombre: "ANDRES",
    apellido: "Hurtado",
    altura: 1.56, //metros
    edad: 18
}

var personas = [Luis, Maria, Andres]

for(var i=0; i < personas.length; i++ ){
    var {nombre, altura} = personas[i]
    var persona = personas[i]
    console.log(`La altura de ${persona["nombre"]} es ${persona.altura}`)
}

const esMenor =  (persona)=> persona.edad < 18 //

var personasAdultas = personas.filter(esMenor)

console.log(personasAdultas)

var busqueda = prompt("Escriba el nombre que quiere bucar:")

var personasPorBusquedad = personas.filter( (persona)=>{
    return persona.nombre.toLowerCase().indexOf(busqueda) > -1
})
console.log(personasPorBusquedad)