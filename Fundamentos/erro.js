// O throw pode lançar varios tipo de informções como mostrado abaixo.

function tratarErroELancar(erro){
    //throw new Error('...........')
    //throw 10
    //throw true
    //throw 'Deu erro'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado() {
   try{
    console.log(obj.name.toUpperCase() + '!!!')
   } catch(e) {
       tratarErroELancar(e)
   } finally {
       console.log('final')
   }
   
}

const obj = {nome: 'Eduardo'}
imprimirNomeGritado(obj)
