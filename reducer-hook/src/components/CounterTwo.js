//in this illustration, we will be using the the state (currentState) object 
//and the action object, instead of using the state and the object directly 
//as we did in the previous example(CounterOne.js)

import React, { useReducer } from 'react'
//we will be making the object of the initialState
const initialState = {
    firstCounter: 0
}

const reducer = (currentState, action) => { //based on the action value, 3 cases arises
    switch (action.type) {
        case 'increment':
            return { firstCounter: currentState.firstCounter + 1 };
        case 'decrement':
            return { firstCounter: currentState.firstCounter - 1 };
        case 'reset':
            return initialState;
        default:
            return currentState;
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>

            <div>Count value is - {count.firstCounter}</div>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

        </div>
    )
}

export default CounterTwo