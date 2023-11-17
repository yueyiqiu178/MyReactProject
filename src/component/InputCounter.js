import React, { Component } from "react"
import PropTypes from 'prop-types';

class InputCounter extends Component {

    static propTypes = {
        text: PropTypes.string.isRequired
    };

    static defaultProps = {
        text: ""
    };

    constructor(props) {
        console.log("constructor");
        super(props);
        this.state =
        {
            iText: "",
            iTextOri: "",
        }
    };

    _textChange(ev) {
        console.log("textChange")
        this.setState({
            iText: ev.target.value,
        });
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
        console.log("props.text="+props.text);
        console.log("state.iText="+state.iText);
        if(props.text !== state.iText && state.iText === state.iTextOri){ 
            return {
                iText: props.text,
            };
        } else{
            return null;
        }
    }

    //before render
    shouldComponentUpdate(nextProps, nextState) {
        this._log('shouldComponentUpdate', arguments);
        return true;
    }

    //after render


    //before update dom and state
    getSnapshotBeforeUpdate(){
        this._log('getSnapshotBeforeUpdate', arguments);
        return null;
    }

    //update dom and state

    componentDidUpdate(oldProps, oldState, snapshot) {
        this._log('componentDidUpdate', arguments);
        if (this.state.iText.length > 6) {
            console.log('The text is too long, abort, abort!');
            this.setState(oldState);
          }
    }


    componentDidMount() {
        this._log('componentDidMount', arguments);
    }

    componentWillUnmount() {
        this._log('componentWillUnmount', arguments);
    }

    render() {
        console.log("render")
        return <div>
            <input value={this.state.iText} onChange={this._textChange.bind(this)}></input>
            <h1>{this.state.iText.length}</h1>
        </div>
    }
}

export default InputCounter