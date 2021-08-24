const notas = [7.7,8.8,9.5,6.5,5.8,3.6,4.9]

// Extrair as notas abaixos de 7.
// Sem callback
const notasBaixas = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2)

// Alternativamente usando funçao arrow
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

// OU
const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)