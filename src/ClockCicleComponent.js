import React, { Component } from 'react';

export default class ClockCicleComponent extends Component {

    constructor() {
        super();

        this.state = {
            time: new Date().toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            })
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.updateClockCicleEvent(), 1000);
    }

    componentWillMount() {
        clearInterval(this.interval);
    }

    updateClockCicleEvent() {
        this.setState({
            time: new Date().toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            })            
        });
    }

    render() {
        
        const { time } = this.state;

        return(
            <h1 style={{ marginLeft: '45%', marginTop: '20%'}}>{ time }</h1>
        );
    }
}