const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const ehChina = array => array.pais === 'China'
const ehMulher = array => array.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
    

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(ehChina).filter(ehMulher).reduce(menorSalario))

})