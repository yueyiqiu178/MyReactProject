import React, { Component } from "react"
import PropTypes from 'prop-types';

class Counter extends Component {

    render() {
        return (
            <div>
                <span>Clicked {this.props.value} times.</span>
            </div>
        )
    }
}

export default Counter