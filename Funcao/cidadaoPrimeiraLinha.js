// Função em JS é First Class Object (citizens)
// High Order Function
// Em JS a função pode ser considerada como um tipo de dado


//criar de forma literal
function fun1(){ }

// Armazenar em uma variável
const fun2 = function() { }

// Armazenar em um array
const array = [function(a,b){return a + b},fun1,fun2]
console.log(array[0](1,2))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'oii'}
console.log(obj.falar())

// Passar função como parametro
function run(fun) {
    fun()
}

run(function() { console.log('Executnado....')})

// Uma funçao pode retornar/conter uma função.
function soma(a,b) {
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)