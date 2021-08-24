const valores = [7.7,8.8,9.9,6.3]
console.log(valores[0],valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

// método push serve para adicionar algum dado no array
valores.push({id: 3},null,false,'teste')
console.log(valores)

// método pop excluí o ultimo item do array
console.log(valores.pop())
console.log(valores)

delete valores[0]
console.log(valores)

console.log(typeof valores)

// OBS: Em Javascript o Array é uma estrutura heterrogênea.
// podendo colocar dados de vários tipos
/// Array é um tipo de objeto em Javascript