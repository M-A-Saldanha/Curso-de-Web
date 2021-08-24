// Hoisting/içamento é uma peculiaridade do Javascript que "iça" ou joga a variavel para o topo,
//fazendo com que ela seja declarada mesmo antes de ser atribuida na sua respectiva linha.
//Exemplo:

console.log('a = ',a)
var a = 10
console.log('a = ',a)

// Esse mesmo efeito não acontece com o let.