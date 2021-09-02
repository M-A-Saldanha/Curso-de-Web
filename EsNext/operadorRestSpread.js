// Operador ... Rest(juntar)/Spread(espalhar).
// Usar Rest com parâmetro de função.

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12800}
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array.
const grupoA = ['João', 'Pedro','Glória']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)