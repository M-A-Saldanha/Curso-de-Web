const carrinho = [
    `{"Nome": "Borracha", "Preco": 3.45 }`,
    `{"Nome": "Caderno", "Preco": 13.90 }`,
    `{"Nome": "Kit de Lapis", "Preco": 41.22 }`,
    `{"Nome": "Caneta", "Preco": 7.50 }`
]

//Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const retornaPreco = produto => produto.Preco
const resultado = carrinho.map(paraObjeto).map(retornaPreco)
console.log(resultado)