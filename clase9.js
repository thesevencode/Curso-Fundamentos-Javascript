//Estructuras repetitivas: FOR
var Luis = {
    edad: 15,
    nombre: "Luis",
    apellido: "Quispe",
    genero: "Masculino",
    peso: 75
}

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365
const incrementarPeso = persona => persona.peso+= INCREMENTO_PESO
const bajarPeso = persona => persona.peso -= INCREMENTO_PESO

console.log(`Luis pesa ${Luis.peso} al inicio del año`)//75


for(var i = 0; i <= DIAS_DEL_ANO ; i++){
    var random = Math.random()//0 y 1   0.56 0.7 0.2 1

    if(random < 0.5){
        incrementarPeso(Luis)
    }
}

console.log(`Luis pesa ${Luis.peso} al final del año`)//incremento
