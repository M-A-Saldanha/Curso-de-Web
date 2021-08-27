const pilotos = ['Senna', 'Alonso', 'Vettel', 'Raikkonen']
console.log(pilotos)
pilotos.pop() // remove o ultimo elemeto da lista
console.log(pilotos)

pilotos.push('Massa')
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// Splice pode adicionar e remover elementos

// Adicionando elementos
pilotos.splice(2, 0, 'Senna', 'Raikkonen')
console.log(pilotos)

// Removendo elementos
pilotos.splice(3, 1)
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2) // Novo Array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)