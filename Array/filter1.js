//Exemplos de uso do método .filter()


const produtos = [
    {nome: 'Notebook', preco: 2500, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

/*
const caro = p => p.preco > 500
const fragil = f => f.fragil
console.log(produtos.filter(acima500).filter(fragil))
*/

const caroeFragil = p => p.preco > 500 && p.fragil
console.log(produtos.filter(caroeFragil))
