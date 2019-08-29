//FUNCIONESSS
var nombre = "Denis", edad = 21 //variables globales

//Camel Case :  holaJohnIsmael
//Pascal case : HolaJohnIsmael

function imprimirEdad(n, e){
    var total = 35 //variable local
    //nombre se convierte en variable local
    //edad se convierte en variable local
    e += 2 //efecto de helado
    //Hola Denis tengo 21 años
    console.log(`Hola ${n.toUpperCase()} tengo ${e} años`)

    imprimirCantidadLetras(n)
}





function imprimirCantidadLetras(a){
    //Luis tiene 4 letras
    //Denis tiene 5 letras
    console.log(`${a} tiene ${a.length} letras`)
}

function imprimirNombreMayuscula(a){
    console.log(a.toUpperCase)
}



imprimirEdad(nombre, edad)//ejecutnado la funcion
imprimirEdad("Luis", 30)//ejecutnado la funcion
imprimirEdad("Luna", 15)//ejecutnado la funcion
imprimirEdad("ella no te ama", 10)//ejecutnado la funcion

