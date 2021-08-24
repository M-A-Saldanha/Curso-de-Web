/*
 Em JavaScript um objeto é sempre uma coleção de chave e valor,
funciona mais ou menos como o dicionario em Python.

*/

const prod1 = {}
prod1.nome = 'Celular Ultra'
prod1.preco = 4999.99
prod1['Desconto maneiro'] = 0.40 // Evitar atributos com espaço.

console.log(prod1)

// Ou pode ser declarado de outro forma...
//OBS: Um objeto pode conter outro objeto dentro dele.

const prod2 = {
    nome: 'Camisa Basica',
    preco: 49.90,
    obj: {
        a: 1,
        obj: {
            a: 1
        }
    }
}

console.log(prod2)