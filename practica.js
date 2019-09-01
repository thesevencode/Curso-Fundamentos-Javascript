(function(){

    //Espera que cargue el html
    var nota1 = document.getElementById("nota1")
    var nota2 = document.getElementById("nota2")
    var nota3 = document.getElementById("nota3")
    var button = document.getElementById("boton")
    var promedio = document.getElementById("promedio")

    function calcularPromedio(a, b, c){
        var nota1 = parseFloat(a)
        var nota2 = parseFloat(b)
        var nota3 = parseFloat(c)
    
        var result = (nota1+nota2+nota3)/3
        return result
    }

    function notificarResultado(result){
        alert(`El Promedio es ${result.toFixed(2)}`)
    }

    //(evento, funcion que vamos a ejecutar)
    button.addEventListener("click",() => {
        var result = calcularPromedio(nota1.value, nota2.value, nota3.value)
        promedio.value = result.toFixed(2)
    })
   


}())