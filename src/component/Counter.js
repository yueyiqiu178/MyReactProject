import React, { Component } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice.js'

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