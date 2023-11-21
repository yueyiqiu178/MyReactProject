import React, { Component } from "react";

class ClickCounterButton extends Component {

    render() {
        return (
            <div>
                <button
                    onClick={this.props.handler}
                    className="btn btn-info">
                    Increase Volume (Current volume is {this.props.counter})
                </button>
            </div>
        )
    }
}

export default ClickCounterButton
