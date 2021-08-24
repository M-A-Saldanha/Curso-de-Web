function criarProduto(nome,preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }

}

console.log(criarProduto('sabão',15))
console.log(criarProduto('Bolacha',10))

const refrigerante = criarProduto('Coca',5.8)
console.log(refrigerante)