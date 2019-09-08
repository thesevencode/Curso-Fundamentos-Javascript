class Carro{
    color//atributo
    modelo//atributo
    placa//
    constructor(color, modelo, placa){//constructor
        this.color = color
        this.modelo = modelo
        this.placa = placa
    }
    prender(){
        console.log(`Auto ${this.color} prendido`)
    }
}

// function Carro(color, modelo, placa){
//     this.color = color
//     this.modelo = modelo
//     this.placa = placa
// }

Carro.prototype.prender = function(){

}

var carro1 = new Carro("rojo", "toyota", "MNU-Y6")

class Persona {
    nombre
    apellido
    edad
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    saludar(){
        //Hola mi nombre es "nombre" y tengo la edad de "edad"
        console.log(`Hola mi nombre es ${this.nombre} y tengo la edad de ${this.edad}`)
    }

}

class Profesor extends Persona{
    //atributos 
    categoria = "informática"   
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad)
        this.sueldo = sueldo
    }

    cobrar(){
        console.log(`${this.nombre} cobra ${this.sueldo}`)
    }
}

var guido = new Profesor("guido", "Larico Uchamaco", 55, 2000)



// function Persona(nombre, apellido, edad){//Constructor: Una funcion que inicializa la clase
//     //Atributos
//     this.nombre = nombre
//     this.apellido = apellido
//     this.edad = edad 

//     this.sueldo = 300
// }



// Persona.prototype.saludar = function(){
//     console.log(this)
//     //Hola mi nombre es "nombre" y tengo la edad de "edad"
//     console.log(`Hola mi nombre es ${this.nombre} y tengo la edad de ${this.edad}`)
// }


// Persona.prototype.despedirse = function(){
//     console.log("ADIOS MUNDO")
// }

// Persona.prototype.esMayor = function(){
//     if(this.edad >=18){
//         console.log("soy mayor")
//     }else{
//         console.log("soy menor")
//     }
// }


var luis = new Persona("Luis", "Mendoza", 18)
var jose = new Persona("Jose", "Quispe", 20)
var andres = new Persona("Andre", "Ulloa", 30)


