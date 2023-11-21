import PropTypes from 'prop-types';
import React, { Component } from "react";

class Email extends Component {

    static propTypes = {
        prompt: PropTypes.string.isRequired
    };

    static defaultProps = {
        prompt: 'Please enter your email to win $1,000,000.'
    };

    constructor(props) {
        console.log("constructor");
        super(props);

        this.state =
        {
            email: "",
            comment: "",
        }

        this.onInputchangeP = this.onInputchange.bind(this);
    };

    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submit(event) {
        console.log("submit");
        console.log(event);
        console.log(this.state.email);
        console.log(this.state.comment);
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
            <div className="well">
                <p>{this.props.prompt}</p>
                <div className="form-group">
                    Email: <input name='email' className="form-control" type="text" placeholder="hi@azat.co" value={this.state.email} onChange={this.onInputchangeP} />
                </div>
                <div className="form-group">
                    Comments: <textarea name='comment' className="form-control" placeholder="I like your website!" value={this.state.comment} onChange={this.onInputchangeP} />
                </div>
                <div className="form-group">
                    <a className="btn btn-primary" value="Submit" onClick={this.submit.bind(this)}>Submit</a>
                </div>
            </div>
        )
    }
}

export default Email