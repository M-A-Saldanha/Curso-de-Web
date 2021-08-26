console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Ana', 'Carlos')

aprovados = ['Bia', 'Ana', 'Carlos']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Mesmo não existindo esse indice ao invés de dar erro o JS retorna undefined

aprovados[3] = 'Paula'
aprovados.push('Rafaela')
console.log(aprovados.length)

aprovados[9] = 'Jorge'
console.log(aprovados.length)
console.log(aprovados[8] === null)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)
console.log(aprovados)


