// usando notação literal
const obj1 = {}
console.log(obj1)

// Objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções Construtoras
function produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesc = () => {
       return preco * (1 - desc)
    }
}

const p1 = new produto('Caneta', 6.99, 0.25)
const p2 = new produto('Impressora', 2300, 0.25)
console.log(p1.getPrecoComDesc(), p2.getPrecoComDesc())

//Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase/ 30) * (30 - faltas)
        }
    }

}

const f1 = criarFuncionario('João', 7980, 6)
const f2 = criarFuncionario('Maria', 11400,1)
console.log(f1.getSalario(), f2.getSalario())

//object.create()
const filha = Object.create(null)
filha.nome = 'Joana'
console.log('filha')

//Uma função famosa que retorna objetos..

const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)