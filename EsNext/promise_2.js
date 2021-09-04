const { set } = require("lodash")
/*
setTimeout(function(){
    console.log('Executando callback.....')
    
    setTimeout(function(){
        console.log('Executando callback....')
        
        setTimeout(function(){
            console.log('Executando callback....')
            
        },2000)
    },2000)
}, 2000)
*/

function esperarPor(tempo = 200) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve('Vishhhh')
        }, tempo)
    }) 
}

 esperarPor(3000)
    .then(() => esperarPor(3000))
    .then(esperarPor)
