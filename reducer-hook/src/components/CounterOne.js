//in this component, we will be illustrating about the use of useReducer hook
//to create a Counter component
//that will increase, decrease or will reset the value of the count
//using buttons

import React, { useReducer } from 'react'

const initialState = 0 //the initial state of the counter is 0

const reducer = (currentState, action) => { //based on the action value, 3 cases arises
    switch (action) {
        case 'increment':
            return currentState + 1;
        case 'decrement':
            return currentState - 1;
        case 'reset':
            return initialState;
        default:
            return currentState;
    }
}

function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count value is - {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne