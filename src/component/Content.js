import React, { Component } from "react";
import ClickCounterButton from './ClickCounterButton';
import Counter from './Counter';

class Content extends Component {

    constructor(props) {
        console.log("constructor");
        super(props);
        this.state = { counter: 0 }
        this.handleClickP = this.myHandleClick.bind(this)
    };

    myHandleClick(event) {
        this.setState({ counter: ++this.state.counter })
    }

    _log(methodName, args) {
        console.log(methodName, args);
    }

    //unsafe
    // componentWillReceiveProps() {
    //     this._log('componentWillReceiveProps', arguments);
    // }

    //unsafe
    // componentWillMount() {
    //     this._log('componentWillMount', arguments);
    // }

    //unsafe
    // componentWillUpdate() {
    //     this._log('componentWillUpdate', arguments);
    // }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        return null;
    }

    //before render
    shouldComponentUpdate(nextProps, nextState) {
        this._log('shouldComponentUpdate', arguments);
        return true;
    }

    //after render


    //before update dom and state
    getSnapshotBeforeUpdate() {
        this._log('getSnapshotBeforeUpdate', arguments);
        return null;
    }

    //update dom and state

    componentDidUpdate() {
        this._log('componentDidUpdate', arguments);
    }


    componentDidMount() {
        this._log('componentDidMount', arguments);
    }

    componentWillUnmount() {
        this._log('componentWillUnmount', arguments);
    }

    render() {
        console.log("render")
        return (
            <div onMouseOver={((event) => {
                //console.log('mouse is over with event')
            }).bind(this)}>
                <button
                    onClick={this.myHandleClick.bind(this)}
                    className="btn btn-primary">
                    Don't click me {this.state.counter} times!
                </button>
                <Counter value={this.state.counter} />
                <ClickCounterButton handler={this.handleClickP} counter={this.state.counter} />
                {this.props.children}
            </div>)
    }
}

export default Content