class lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    } //função construtora da classe
}

class cicloFinanceiro {
    constructor( mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamento(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario() {
        let valorConsilidado = 0
        this.lancamentos.forEach(l => {
            valorConsilidado += l.valor
        })
        return valorConsilidado
    }
}

const salario = new lancamento('Salario', 45000)
const contaDeLuz = new lancamento('luz', -220)

const contas = new cicloFinanceiro(6, 2021)
contas.addLancamento(salario, contaDeLuz)
console.log(contas.sumario())
