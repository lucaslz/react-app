import React, { Component } from 'react';
import './App.css';

export default class Clock extends Component {

    render() {
        const mostrarHora = () => {
            return new Date().toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            });
        };

        const color = 'red';

        return (
            <h1 className="cor">
                { mostrarHora() }
            </h1>
        );
    }
}