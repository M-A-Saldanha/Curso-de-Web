// Tratamento de erro com promise.

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ouve um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.9)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!'))