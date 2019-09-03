const llover = ()=> Math.random() < 0.3

var contador = 0
do{
    contador++
}while(!llover())

console.log(`LLovio en el dia ${contador}`)