console.log(soma(3,4))
/*
    Isso acontece porque o interpretador do JS já tem carregado as funções previamentes
    antes mesmo de ter executado o código.
    Obs: o mesmo não acontece com functio expression
*/
// function declaration.
function soma(x,y){
    return x + y
}

// function expression.
const sub = function(x,y){
    return x - y
}
console.log(sub(3,4))

// named function expression - forma pouco usada.
const mult = function mult(x,y) {
    return x * y
}
