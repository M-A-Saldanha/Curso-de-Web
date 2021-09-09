const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.urlencoded({extended: true}))


app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns</h1>')
})

app.listen(3003)





/*
Isso é um exemplo de uma aula por isso está dentro da mesma pasta do "frontend".
lembrar que em quesito de produção a pasta do backend não deve ser acessada 
através do browser. 
*/