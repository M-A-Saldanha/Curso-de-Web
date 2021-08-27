//Simulando o funcionamento do map.

Array.prototype.map2 = function(callback){
    const newArray = []
    for( let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    `{"Nome": "Borracha", "Preco": 3.45 }`,
    `{"Nome": "Caderno", "Preco": 13.90 }`,
    `{"Nome": "Kit de Lapis", "Preco": 41.22 }`,
    `{"Nome": "Caneta", "Preco": 7.50 }`
]

//Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const retornaPreco = produto => produto.Preco
const resultado = carrinho.map2(paraObjeto).map2(retornaPreco)
console.log(resultado)
