import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return (
            <div className="counter">
                <h2 className="counter__title">Number is : {this.state.count} </h2>

                <div className="counter__buttons">
                    <button type="button" className="btn btn-primary mr-3" onClick={this.increment} disabled={this.state.count == 5 ? true : false}>ADD</button>
                    <button type="button" className="btn btn-primary" onClick={this.decrement} disabled={this.state.count == 0 ? true : false}>SUB</button>
                </div>
            </div>
        );
    }
}

export default Counter;

