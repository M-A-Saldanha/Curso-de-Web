const saudacao = 'Salve!!' // contexto léxico 

function exec(){
    const saudacao = 'oii!!!' // contexto léxico 2 
    return saudacao
}

//  Obejetos são grupos aninhados de pares nome/valor.
const cliente = {
    nome: 'Marco',
    idade: 25,
    peso: 73,
    endereço: {
        logradouro: 'rua dos bobos',
        numero: 0
    }

}

console.log(saudacao)
console.log(exec())
console.log(cliente)