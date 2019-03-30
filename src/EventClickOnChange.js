import React, { Component } from 'react';

export default class EventClickOnChange extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            data: []
        }
    }

    getName = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addName = () => {
        const arr = this.state.data
        arr.push(this.state.name)

        this.setState({
            name: '',
            data: arr
        })

        console.log(this.state)
        document.getElementById('nome').value = ''
    }

    render() {
        return (
            <div>
                <input id="nome" onChange={this.getName} name="name" placeholder="Digite seu nome" />
                <button onClick={this.addName}>OK!</button>
                <ul>
                    {
                        this.state.data.map(name => (
                            <li key={ name }>{ name }</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}