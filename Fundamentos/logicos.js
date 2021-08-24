// Exemplos de operadores lógicos utilizando uma função.

function compra(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise XOR.
    const comprarTv32 = trabalho1 != trabalho2 // nesse caso foi usado o operador lógico de diferente para simular o XOR.
    const manterSaudavel = !comprarSorvete // operador Unário.

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compra(true,true))
console.log(compra(true,false))
console.log(compra(false,false))
console.log(compra(false,true))


