// Devido a Let possuir escopo de bloco os indices são gravados de forma correta.

const funcs = []

for (let i = 0; i < 10;i++)
{
    funcs.push(function()
    {
        console.log(i)
    })
}

funcs [2]()
funcs [8]()