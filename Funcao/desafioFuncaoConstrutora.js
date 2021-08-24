/*
class pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
 Criar essa mesma Classe só que com função construtora

*/

function pessoa(nome){
    
    this.nome = nome

    
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }

    
}

const roger = new pessoa('Roger')
roger.falar()

// não esquecer de usar o operador "new" para instaciar o objeto