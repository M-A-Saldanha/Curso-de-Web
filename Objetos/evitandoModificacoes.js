// object,preventExtensions - impede que adicione novos atributos ao objeto,
// porém, pode deletar os já existentes e tbm alterar seus valores.

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})
console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// object.seal - "Sela" o objeto,não podendo adicionar e nem remover atributos,
// mas pode alterar o valor dos existentes.

const pessoa = { nome: 'Juliana', idade: 22 }
Object.seal(pessoa)
console.log('selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// object.freeze = selado + valores constantes.