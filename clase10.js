var Luis = {
    edad: 15,
    nombre: "Luis",
    apellido: "Quispe",
    genero: "Masculino",
    peso: 75
}

Luis.peso = parseFloat(prompt("Escriba el peso de Luis"))
var INCREMENTO_PESO = parseFloat(prompt("eliga cuanto bajara de peso"))

const DIAS_DEL_ANO = 365
const incrementarPeso = persona => persona.peso+= INCREMENTO_PESO
const bajarPeso = persona => persona.peso -= INCREMENTO_PESO

const HacerEjercicio = () => Math.random() < 0.8//True o false
const comer  = () => Math.random() < 0.2

var pesoIdeal = Luis.peso-5

console.log(`Luis pesa ${Luis.peso} al inicio del año`)

var dias = 0
while(Luis.peso > pesoIdeal){

    if(comer()){
        incrementarPeso(Luis)
    }

    if(HacerEjercicio()){
        bajarPeso(Luis)
    }
    dias+=1
}

alert(Luis.peso)
console.log(`Tuvieron que pasar ${dias} dias para que ${Luis.nombre} obtenga su peso ideal`)


