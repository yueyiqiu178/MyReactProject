import React, { Component } from "react"
import PropTypes from 'prop-types';

class Users extends Component {

    static propTypes = {
        dataUrl: PropTypes.array.isRequired
    };

    static defaultProps = {
        dataUrl: null
    };

    constructor(props) {
        console.log("constructor");
        super(props);
        this.state = {
            users: []
        }
        console.log(this.props['dataUrl']);
    };

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
        this.setState({ users: this.props.dataUrl });
    }

    componentWillUnmount() {
        this._log('componentWillUnmount', arguments);
    }

    render() {
        console.log("render")
        return <div className="container">
            <h1>List of Users</h1>
            <table className="table-striped table-condensed table table-bordered table-hover">
                <tbody>{this.state.users.map((user) =>
                    <tr key={user.id}>
                        <td>{user.first_name} {user.last_name}</td>
                        <td> {user.email}</td>
                        <td> {user.ip_address}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    }
}

export default Users