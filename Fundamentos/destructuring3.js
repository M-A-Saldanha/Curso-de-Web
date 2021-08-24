//Exemplo de Destructuring com funções.


function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50,min: 40}
console.log(rand(obj))
console.log(rand({min: 950}))
console.log(rand({}))

// Nesse caso vai dar erro pois ele não pode desestruturar algo que está undefined
console.log(rand())