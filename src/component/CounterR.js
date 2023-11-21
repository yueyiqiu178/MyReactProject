import React, { Component } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../redux/counterSlice';

/*
function withHooks(WrappedComponent) {
    return function (props) {
        //const [count, setCount] = useState(0);
        const count = useSelector((state) => state.counter.value)
        const dispatch = useDispatch()

        return (
            <WrappedComponent />
        );
    };
}
*/
/*
class CounterR extends Component {

    render() {

        return (
            <div>

                <div>
                    <button
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>
                    <span>{count}</span>
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        )
    }
}

export default withHooks(CounterR);
*/

function CounterR() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="IncrementByAmount"
          onClick={() => dispatch(incrementByAmount(9))}
        >
          IncrementByAmount
        </button>
      </div>
    </div>
  )
}

export default CounterR;