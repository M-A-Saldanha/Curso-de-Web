function pessoa (){
     this.idade = 0

     setInterval(() => {
        this.idade++
        console.log(this.idade)
     }, 1000)
}

new pessoa

// Usando a função arrow o this não sofre alteração.