
const primeiroElemento = (arrayOuString) =>  arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Joana','Clara','Maria'])
})
    .then(primeiroElemento) // Resultado de um sempre é passado para o próximo
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)