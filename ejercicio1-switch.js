(function(){

    var numero1 = document.getElementById("numero1")
    var numero2 = document.getElementById("numero2")
    var operacion = document.getElementById("operacion")
    var boton = document.getElementById("boton")

    function calcularOperacion(){
        var a = parseInt(numero1.value)
        var b = parseInt(numero2.value)

        var res
        
        switch(operacion.value){
            case 'resta':
                res = a - b
                break
            case 'suma':
                    res = a + b
                    break
            case 'multiplicacion':
                    res = a * b
                    break
            case 'division':
                if(b == 0){
                    res = "error"
                }else{
                    res = a/b
                }
                break
        }

        return res

    }

    boton.addEventListener("click", () =>{
        var resultado = calcularOperacion()
        alert(`Resultado es: ${resultado}`)
    })



}())