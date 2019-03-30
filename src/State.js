import React, { Component } from 'react';

export default class State extends Component {
    constructor() {
        super();
        this.state = {
            nome: "Lucas",
            idade: 25
        }
        
        console.log(this.state);
    }

    render() {

        const { nome, idade } = this.state;

        return (
            <div>
                <p>State</p>
                <h1>{ nome }</h1>
                <h2>{ idade }</h2>
            </div>
        );
    }
} 