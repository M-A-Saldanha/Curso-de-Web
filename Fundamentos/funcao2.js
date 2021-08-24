// Armazenando uma função em uma variável.

const imprimirSoma = function (a,b)
{
    console.log(a + b)
}

imprimirSoma(1,5)

// Armazenando uma função Arrow em uma variável.

const soma = (a,b) => 
{
    return a + b
}

console.log(soma(40,8))

// Retorno implícito.
// OBS: Faz a mesma coisa que a declaração da função acima só que de forma 
// mais simplificada.

const subtracao = (a,b) => a - b

console.log(subtracao(8,5))
