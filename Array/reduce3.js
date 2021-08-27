// Simulando a funcionalidade do reduce.

Array.prototype.reduce2 = function(callback, valorInicial){
    let indiceInicial = valorInicial ? 0 : 1
    let acc = valorInicial || this[0]
    for( let i = indiceInicial; i < this.length; i++) {
       acc = callback(acc, this[i], i, this)
    }
    return acc
}

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]


const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]

console.log(nums.reduce2(soma, 21))

const todosBolsista = (resultado, bolsista ) => resultado && bolsista
console.log(alunos.map(b => b.bolsista).reduce2(todosBolsista))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(b => b.bolsista).reduce2(algumBolsista))
