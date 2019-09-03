var Luis = {
    nombre: "Luis",
    apellido: "Quispe",
    genero: "Masculino",
    talla: 1.69,
    peso: 35,
    edad: 15
}

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365
const incrementarPeso = persona => persona.peso+= INCREMENTO_PESO
const bajarPeso = persona => persona.peso -= INCREMENTO_PESO
const calucarImc = ({ peso, talla }) => peso/(talla*talla)


//calcularImc(Luis) => 

function corregirPeso (persona){
    console.log(`${persona.nombre} pesa ${Luis.peso} al inicio del año`)

    var dias = 0
    for(var i = 0; i <=DIAS_DEL_ANO  ; i++){

        var imc = calucarImc(persona)//retornar un decimal
        if(imc > 24.9 ){
            bajarPeso(persona);
        }
        
        if(imc < 18.5){
            incrementarPeso(persona)
        }else if(imc >= 18.5 && imc <=24.9){ // ||
            break// termine el for
        }

        dias+=1;
    }

    console.log(`Tuvieron que pasar ${dias} dias para que  ${persona.nombre} obtenga su peso ideal de ${Math.round(persona.peso)} `)

    
}

function hola(j){
    j++
}