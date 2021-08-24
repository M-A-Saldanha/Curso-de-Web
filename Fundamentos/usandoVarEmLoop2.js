// Devido ao escopo global de Var todos indices do array serão 10.

const funcs = []

for (var i = 0; i < 10;i++)
{
    funcs.push(function()
    {
        console.log(i)
    })
}

funcs [2]()
funcs [8]()