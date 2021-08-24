// Declara uma variável com Var faz com que a Varável tenha
// Escopo Global ou Escopo de Função.
// Exemplo:

{
    
    {
        {
            {
                var teste = 5
            
            }
        }
    }

}

console.log(teste)

//Exemplo de Escopo de Função...

function exemplo()
{
    var teste2 = 10
}

exemplo()
console.log(teste2)


// Outro exemplo de escopo Global...

var numero = 1

{
    var numero = 2
    console.log('Dentro = ',numero)
}

console.log('Fora = ',numero)