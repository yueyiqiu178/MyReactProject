import React, { Component } from "react"
import PropTypes from 'prop-types';

class TextAreaCounter extends Component {

    static propTypes = {
        text: PropTypes.string.isRequired
    };

    static defaultProps = {
        text: ""
    };

    constructor(props) {
        super(props);
        this.state =
        {
            iText: this.props.text,
        }
    };

    _textChange(ev) {
        console.log(ev)
        this.setState({
            iText: ev.target.value,
        });
    }

    _log(methodName, args) {
        console.log(methodName, args);
    }
    
    componentWillUpdate() {this._log('componentWillUpdate',  arguments);}
    componentDidUpdate() {this._log('componentDidUpdate',   arguments);}
    componentWillMount() {this._log('componentWillMount',   arguments);}
    componentDidMount() {this._log('componentDidMount',    arguments);}
    componentWillUnmount() {this._log('componentWillUnmount', arguments);}

    render() {
        return <div>
            <input value={this.state.iText} onChange={this._textChange.bind(this)}></input>
            <h1>{this.state.iText.length}</h1>
        </div>
    }
}

export default TextAreaCounter