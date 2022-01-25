import React, { Component } from "react";

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props)

        this.SetTipo = this.SetTipo.bind(this)
    }

    SetTipo(e) {
        this.setState({tipo: e.target.value})
    }

    SetNome(e) {
        this.setState({nome: e.target.value})
    }
    
    render() {
        const {tipo, nome} = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} 
                onChange={this.SetTipo} />
                <input type="text" placeholder="Nome..." value={nome}
                onChange={e => this.SetNome(e)} />
            </div>
        ) 
    }
}