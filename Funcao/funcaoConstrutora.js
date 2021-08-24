function carro(velocidadeMaxima = 200, delta = 5){
    //Atributo privado
    let velocidadeAtual = 0

    //Método publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //Método publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }

}

const uno = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const jaguar = new carro(350,20)
jaguar.acelerar()
console.log(jaguar.getVelocidadeAtual())

console.log(typeof carro)
console.log(typeof jaguar)