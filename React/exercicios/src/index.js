import React from 'react'
import ReactDom from 'react-dom'

import Saudacao from './Componentes/Saudacao'

import Pai from './Componentes/Pai'
import Filho from './Componentes/Filho'

//const elemento = <h1>React</h1>

ReactDom.render(
    <div>
        <Pai nome="Jorge" sobrenome="Silva" >
            <Filho nome="Paulo" />
            <Filho nome="Pedro" />
            <Filho nome="João" />
        </Pai>
    </div>
,
     document.getElementById('root'))