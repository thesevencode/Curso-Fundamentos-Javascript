(function(){

    var signo = document.getElementById("signo")
    var boton = document.getElementById("boton")

    function futuro(signo){
        var mensaje

        switch(signo){
            case 'cáncer':
            case 'cancer':
                mensaje = "Mensjae para cáncer"
                break
            case 'tauro':
                //cáncer
                mensaje = "vas a jalar"
                break
            case 'libra':
                mensaje = "sufriras un accidente"
                break
            default:
                mensaje = "no escribio"
                break
        }

        return mensaje

    }

    boton.addEventListener("click", ()=>{
        var resultado = futuro(signo.value)
        alert(resultado)
    })

    

}())