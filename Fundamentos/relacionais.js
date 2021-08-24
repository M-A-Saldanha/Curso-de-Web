// Operadores relacionais.
//Exemplos:

// O operador == analisa se os dois dados tem o mesmo valor(não levando em consideração o tipo),
// por isso retorna true.
console.log('01)','1' == 1)

//O operador === analisa se os dois dados são idênticos(levando em consideração o tipo),
// por isso retorna false.
console.log('02)','1' === 1)

// O operador != analisa se os dois dados tem valores diferente(não levando em consideração o tipo),
// por isso retorna false.
console.log('03)','3' != 3)

// O operador !== analisa se os dois dados são estritamente diferentes(levando em consideração o tipo),
// por isso retorna true.
console.log('04)','3' !== 3)

// operador <, significa, menor que.....
console.log('05)', 3 < 2)

// operador >, significa, maior que ....
console.log('06)', 3 > 2)

// operador <=, significa, menor ou igual a....
console.log('07)', 3 <= 2)

// operador <=, significa, maior ou igual a....
console.log('08)', 3 >= 2)

// No caso 9 e 10 ambos serão false,porque será comparada o referência de memória
const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d2 == d1)

// Nesse caso como o dois vão ter o mesmo tipo e mesmo valor em qualquer um dos casos
// será true
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', d1.getTime() == d2.getTime())

// Por via de regra é melhor usar === do que == para fazer comparação.
console.log('13)', undefined === null)
console.log('14)', undefined == null)


