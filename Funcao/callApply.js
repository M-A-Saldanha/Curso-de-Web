function getPreco ( imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'PC Gamer',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 4000
global.desc = 0.2
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 20000, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro,0.17,'$'))
console.log(getPreco.apply(carro,[0.15,'$']))