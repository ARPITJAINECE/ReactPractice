import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'

function CounterTwo() {
    // const [count, setcount] = useState(0)

    // const increment = () => {
    //     setcount(prevCount => prevCount + 1)
    // }

    // const decrement = () => {
    //     setcount(prevCount => prevCount - 1)
    // }

    // const reset = () => {
    //     setcount(0)
    // }

    const [count, increment, decrement, reset] = useCounter(10,10)

    return (
        <div>
            <h2>Count value is = {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterTwo