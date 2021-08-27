/*
Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.
Exemplos:
cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
cumprimentar("Maria") // retornará "Olá, Maria!"
*/

const cumprimentar = texto => console.log(`Olá, ${texto}!`)
cumprimentar('João')

/*
Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
    Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
    desconsidere também dias decorridos desde o último aniversário.
Exemplos:
    converterIdadeEmAnosParaDias(25) // retornará 9125
    converterIdadeEmAnosParaDias(70) // retornará 25550
*/

const converterIdadeEmAnosParaDias = idade => {
    let diasDoAno = 365
    
    return console.log(idade * diasDoAno)
}

converterIdadeEmAnosParaDias(25)
converterIdadeEmAnosParaDias(70)

/*
Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.
Exemplos:
calcularSalario(150, 40.5) // retornará "Salário igual a R$ 6075"

*/

const calcularSalario = (horas, ganhaPorHora) => {
    let salario = horas * ganhaPorHora
    return console.log(`Salário igual a R$ ${salario}`)
}

calcularSalario(150, 40.5)

/*
Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
Exemplos:
    nomeDoMes(1) // retornará "janeiro"
    nomeDoMes(4) // retornará "abril"
*/

const nomeDoMes = mes => {
    switch(mes){
        case 12:
            console.log('Dezembro')
            break
        case 11:
            console.log('Novembro')
            break
        case 10:
            console.log('Outubro')
            break
        case 9:
            console.log('Setembro')
            break
        case 8:
            console.log('Agosto')
            break
        case 7:
            console.log('Julho')
            break
        case 6:
            console.log('Junho')
            break
        case 5:
            console.log('Maio')
            break
        case 4:
            console.log('Abril')
            break
        case 3:
            console.log('Março')
            break
        case 2:
            console.log('Fevereiro')
            break
        case 1:
            console.log('Janeiro')
            break
        default:
            console.log('Mês inválido')
    }
}

nomeDoMes(9)
nomeDoMes(12)

