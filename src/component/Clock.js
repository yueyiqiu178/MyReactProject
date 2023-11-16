import React, { Component } from "react"
import PropTypes from 'prop-types';

class Clock extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        maxLength: PropTypes.number.isRequired
    };

    static defaultProps = {
        name: "OOOO",
        maxLength: 10,
    }; // 注意有分號

    constructor(props) {
        super(props);
        this.state =
        {
            currentTime: new Date().toLocaleString(),
            clockName: "Tomcat Yu"
        };
        this.launchClock();
        console.log(this)
    }
    launchClock() {
        console.log("launchClock");
        this.setState({ name: "Ken Yao" });
        
        setInterval(() => {
            console.log('Updating time...');
            this.setState({
                currentTime: new Date().toLocaleString(),
                name: "Jim Lee"
            });
            console.log(this.state.name)
        }, 3000);
    }
    render() {
        console.log('Rendering Clock...')
        return <div>
            {this.state.clockName}
            @@
            {this.props.name}
            @@
            {this.state.currentTime}
        </div>

    }
}

export default Clock