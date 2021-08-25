const a = 1
const b = 2
const c = 3

const obj1 = {a:a, b:b, c:c}
const obj2 = {a, b, c}
console.log(obj1, obj2)

const nomeAtrr = 'nota'
const valorAtrr = 7.9

const obj3 = {}
obj3[nomeAtrr] = valorAtrr
console.log(obj3)

const obj4 = {[nomeAtrr]: valorAtrr}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        //....
    },
    funcao2(){
        // ...
    }
}

console.log(obj5)