//GET: Obtener el valor del atributo
//SET: Dar un valor a un atributo


class Vehiculo{

    Vehiculo(matricula, modelo, potenciaCV){
        this.matricula = matricula
        this.modelo = modelo
        this.potenciaCV = potenciaCV
        this.iniciar()
    }

    iniciar(){
        console.log("CREANDO UNA NUEVO VEHICULO")
    }

    //void : metodo 

    /*
        private
        public
        static
    */
    getMatricula(){//función
        return this.matricula
    }
    setMatricula(matricula){//metodo
        this.matricula = matricula
    }

    get modelo(){
        return this.modelo
    }

    setModelo(modelo){
        this.modelo = modelo
    }

    getPotenciaCV(){
        return this.potenciaCV
    }

    setPotenciaCV(potencia){
        this.potenciaCV = potencia
    }

    calcularVelocidad(a,b,c){

    }

}

class Taxi extends Vehiculo{
    constructor(matricula, modelo, potenciaCV, numeroLicencia){
        super(matricula, modelo, potenciaCV)
        this.numeroLicencia = numeroLicencia
    }

    setNumeroLicencia(licencia){
        this.numeroLicencia = licencia
    }
    getNumeroLicencia(){
        return this.numeroLicencia
    }
}

class Autobus extends Vehiculo{
    constructor(matricula, modelo, potenciaCV, numeroPlazas){
        super(matricula, modelo, potenciaCV)
        this.numeroPlazas = numeroPlazas
    }

    setNumeroPlazas(numeroPlazas){
        this.numeroPlazas =numeroPlazas
    }

    getNumeroPlazas(){
        return this.numeroPlazas
    }

}

var taxi = new Taxi("JHY-7Y", "Hyunday", 200, "KYU-6N")//instanciar un objeto de la clase Taxi
var autobus = new Autobus("MNH-9O", "Toyota", 500, 60)

