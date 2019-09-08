class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    saludar(fn){
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`)

        fn(this.nombre, this.apellido, false)

    }

    getNombre(){
        return this.nombre
    }

    setNombre(nombre){
        this.nombre = nombre
    }

    getApellido(){
        return this.apellido
    }

    setApellido(apellido){
        this.apellido = apellido
    }

    getEdad(){
        return this.edad
    }

    setEdad(edad){
        this.edad = edad
    }


}

class Desarrollador extends Persona{
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad)
    }

    saludar(fn){
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`)

        fn(this.nombre, this.apellido, true)
    }


}

function responderSaludo(nombre, apellido, isDev){
    console.log(`Bienvenido ${nombre} ${apellido.toUpperCase()}`)
    if(isDev){
        console.log("Ah no sabia que eras programador chingon")
    }

}

var luis = new Persona("Luis", "Quispe", 20)
var ismael = new Desarrollador("Ismael", "Sanchez", 18, 3000)

luis.saludar(responderSaludo)
ismael.saludar(responderSaludo)