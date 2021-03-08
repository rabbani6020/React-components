import React, { Component } from 'react';

class Info extends Component {
    render() {
        return (
            <div className="developer">
                <h4 className="developer__name">{this.props.name}</h4>
                <p className="developer__designation">{this.props.designation}</p>
            </div>
        );
    }
}

export default Info;

