import { Component } from "react"
class LanCom extends Component {
    render() {
    return <h1 {...this.props}>{this.props.frameworkName}</h1>
    }
}

export default LanCom