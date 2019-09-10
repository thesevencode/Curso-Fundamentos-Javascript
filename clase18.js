// var boton = document.getElementById("next-btn")
var persona = document.getElementById("input-field")
var tabla = document.getElementById("tablaResultado").getElementsByTagName('tbody')[0]

const URL = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"

//https://swapi.co/api/people/4

const opciones = { crossDomain: true }

$("#next-btn").hover(function() {
    
    if(persona.value == ""){
        alert("ESCRIBE ALGO!!!!")
    }else{
       const personajeUrl = `${URL}${PEOPLE_URL.replace(":id", persona.value)}`


        $.get( personajeUrl, opciones, function (data){
            console.log(arguments)
            tabla.innerHTML = ""//para limpiar o reiniciar el html del tbody

            var fila = tabla.insertRow()//creamos una nueva fila a la tabla
            var celdaNombre = fila.insertCell(0)//insetamos una celda en la posicion 0
            var celdaApellido = fila.insertCell(1)
            var celdaAltura = fila.insertCell(2)
            var celdaEdad = fila.insertCell(3)

            var textoNombre = document.createTextNode(data.name)
            var textoApellido = document.createTextNode(data.eye_color)
            var textoAltura = document.createTextNode(data.birth_year)
            var textoEdad = document.createTextNode(data.url)


            celdaNombre.appendChild(textoNombre)
            celdaApellido.appendChild(textoApellido)
            celdaAltura.appendChild(textoAltura)
            celdaEdad.appendChild(textoEdad)
        

        }) 
    }
});

// boton.addEventListener("click", ()=>{
    
//     if(persona.value == ""){
//         alert("ESCRIBE ALGO!!!!")
//     }else{
//        const personajeUrl = `${URL}${PEOPLE_URL.replace(":id", persona.value)}`


//         $.get( personajeUrl, opciones, function (data){
//             console.log(arguments)
//             tabla.innerHTML = ""//para limpiar o reiniciar el html del tbody

//             var fila = tabla.insertRow()//creamos una nueva fila a la tabla
//             var celdaNombre = fila.insertCell(0)//insetamos una celda en la posicion 0
//             var celdaApellido = fila.insertCell(1)
//             var celdaAltura = fila.insertCell(2)
//             var celdaEdad = fila.insertCell(3)

//             var textoNombre = document.createTextNode(data.name)
//             var textoApellido = document.createTextNode(data.eye_color)
//             var textoAltura = document.createTextNode(data.birth_year)
//             var textoEdad = document.createTextNode(data.url)


//             celdaNombre.appendChild(textoNombre)
//             celdaApellido.appendChild(textoApellido)
//             celdaAltura.appendChild(textoAltura)
//             celdaEdad.appendChild(textoEdad)
        

//         }) 
//     }
    
// })

