//VARIABLE STRING

var nombre = "Denis"
var apellido = "Vilcas Villalba"

var mayusculaNombre = nombre.toUpperCase()//Convierte mayuscula el String
var minusculaApellido = apellido.toLowerCase()//Convierte a minuscula

var totalLetras = apellido.length

var letra =  nombre.charAt(1)

var error = nombre.charAt(0) + nombre.charAt(1)+ nombre.charAt(2) //no es recomendable
//"Den"

var letras = nombre.substr(0 , 3)


//nombre + apellido

//INTERPOLACION
var completo = `${nombre} ${apellido.toUpperCase()}`

//ULTIMA LETRA
var ultima = nombre.substr(nombre.length-1 , 2)//capturar ultima letra