//Exemplos de Destructuring com arrays.


const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10,3,5,9]
console.log(n1,n3,n5,n6)

const [, [, nota]] = [[8,9,7],[10,6,5]]
console.log(nota)

