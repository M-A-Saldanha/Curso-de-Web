//console.log(global)

global.minhaAPP = Object.freeze({
    saudacao() {
        return 'Estou em todos lugares!'
    },
    nome: 'Sistema Legal'
})

// Tomar cuidado para não alterar o objeto global