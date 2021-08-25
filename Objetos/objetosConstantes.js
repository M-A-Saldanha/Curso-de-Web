// pessoa -> 123 -> {...}
const pessoa = {nome: 'Pedro'}
pessoa.nome = 'Ana'
console.log(pessoa)

// Pessoa -> 456 -> {...}
// pessoa = {nome: 'João'}

Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)