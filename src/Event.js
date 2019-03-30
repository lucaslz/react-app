import React, { Component } from 'react';

export default class Event extends Component {
    constructor() {
        super();
        this.state = {
            contador: 0
        }

        // this.clicando = this.clicando.bind(this);
    }

    /**
     * Uso iron function porque ela nao guarda contexto,
     * sem isso terei de usar o bind, ou colocar a funcao
     * no construtor
     */
    clicando = () => {
        
        console.log(this.state.contador);

        this.setState({
            contador: this.state.contador + 1
        })
    }

    render() {
        return(
            <button onClick={ this.clicando }>Click</button>
        );
    }
}