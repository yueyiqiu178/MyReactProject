import React from "react";
import Logo from "./component/Logo";
import MyButton from './component/MyButton';
import Winepad from "./component/Winepad";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, init } from '../redux/winepadSlice';

function WinepadDock() {

    console.log("WinepadDock")
    const dispatch = useDispatch()

    dispatch(init())

    const value = useSelector((state) => state.winepad.value)
    const wineList = useSelector((state) => state.winepad.wineList)

    console.log(value)
    console.log(wineList)

    return (
        <div>
            <div className="app-header">
                <Logo /> Welcome to Whinepad!
                <Winepad></Winepad>
            </div>
        </div>
    )
}

export default WinepadDock

/*
class WinepadDock extends Component {

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
        console.log("props.text=" + props.text);
        console.log("state.iText=" + state.iText);
        if (props.text !== state.iText && state.iText === state.iTextOri) {
            return {
                iText: props.text,
            };
        } else {
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
    getSnapshotBeforeUpdate() {
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
        return
        (
            <div>
                <div className="app-header">
                    <Logo /> Welcome to Whinepad!
                </div>
                <Whinepad />
            </div>
        )
    }
}

export default WinepadDock

*/