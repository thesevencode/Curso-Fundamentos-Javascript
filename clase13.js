(function(){

    var encontrar = document.getElementById("encontrar")
    var boton = document.getElementById("boton")
    var tabla = document.getElementById("tablaResultado").getElementsByTagName('tbody')[0]

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

    //var busqueda = prompt("Escriba el nombre que quiere bucar:")
   
    

    boton.addEventListener("click", () =>{

        var personasPorBusquedad = personas.filter( (persona)=>{
            return persona.nombre.toLowerCase().indexOf(encontrar.value) > -1
        })

        tabla.innerHTML = ""//para limpiar o reiniciar el html del tbody
        for(var i = 0; i < personasPorBusquedad.length; i++){
            var persona = personasPorBusquedad[i]

            var fila = tabla.insertRow()//creamos una nueva fila a la tabla
            var celdaNombre = fila.insertCell(0)//insetamos una celda en la posicion 0
            var celdaApellido = fila.insertCell(1)
            var celdaAltura = fila.insertCell(2)
            var celdaEdad = fila.insertCell(3)

            var textoNombre = document.createTextNode(persona.nombre)
            var textoApellido = document.createTextNode(persona.apellido)
            var textoAltura = document.createTextNode(persona.altura)
            var textoEdad = document.createTextNode(persona.edad)


            celdaNombre.appendChild(textoNombre)
            celdaApellido.appendChild(textoApellido)
            celdaAltura.appendChild(textoAltura)
            celdaEdad.appendChild(textoEdad)
        }

        console.log(`RESULTADO: ` )
        console.log(personasPorBusquedad)
        
    })


}())

