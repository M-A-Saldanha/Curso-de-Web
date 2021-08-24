console.log(Math.ceil(6.2))

const obj = {}
obj.nome = 'bola'
obj['nome'] = 'bola 2'

function Obj(nome) {
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()