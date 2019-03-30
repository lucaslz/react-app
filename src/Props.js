import React, { Component } from 'react';
import Panel from './Panel';

export default class Props extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { nome } = this.props;

        return (
            <Panel headercolor="green" headertext="Olá Lucas Tudo bem !" data="Todos os dados" />
        );
    }
}