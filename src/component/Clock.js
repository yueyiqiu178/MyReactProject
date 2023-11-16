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
        // this.state =
        // {
        //     currentTime: new Date().toLocaleString(),
        //     name: "Tomcat Yu"
        // };
        // this.launchClock();
        // console.log(this)
    }
    launchClock() {
        // console.log("launchClock");
        // this.setState({name:"Ken Yao"});
        // console.log(this.state.name)
        // setInterval(() => {
        //     console.log('Updating time...');
        //     this.setState({
        //         currentTime: new Date().toLocaleString(),
        //         name : "Jim Lee"
        //     });
        // }, 9000);
    }
    render() {
        console.log('Rendering Clock...')
        return <div>
            @@
            { this.props.name}
        </div>

    }
}

export default Clock