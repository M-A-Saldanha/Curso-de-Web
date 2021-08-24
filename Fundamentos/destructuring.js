// novo recurso do ES2015
// A sintaxe de atribuição via desestruturação (destructuring assignment)
// é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.


const pessoa = {
    nome: 'jorge',
    idade: 22,
    endereco: {
        logradouro: 'rua abc',
        numero: 1520
    }

}

const {nome,idade} = pessoa
console.log(nome,idade)

// ou ....

const{nome: n,idade: i} = pessoa
console.log(n,i)

const {sobrenome,bemHumorado = true} = pessoa
console.log(sobrenome,bemHumorado)

const {endereco: { logradouro,numero,cep}} = pessoa
console.log(logradouro,numero,cep)