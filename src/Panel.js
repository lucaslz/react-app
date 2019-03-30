import React, { Component } from 'react';

export default class Panel extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { headercolor, headertext, data } = this.props;

        return(
            <div className="panel" style={{ border: `1px solid ${headercolor}`, width: '50%', heigth: '50px' }}>
                <div className="panel-head" style={{ width: '100%', heigth: '50px', background: `${headercolor}` }}>
                    { headertext }
                </div>
                <div className="panel-body">
                    { data }
                </div>
            </div>
        );
    }
}