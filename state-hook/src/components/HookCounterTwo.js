//illustration of the useState hook in which we are increasing, decreasing or resetting the values in the button
import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    }
    return (
        <div>
            Count:{count}
            {/* below 4 buttons are showing that with the help of the previous state
            , changing the current state----> but it's a bit typical way but mostly used. */}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrease</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>

            <button onClick={incrementFive}>Increment By 5</button>

            {/* below one way is the most easiest way to change the current state of the 
            count, without using the previous state ,
            if we are below method, then we don't even need to define the incrementFive() method too*/}
            {/* <button onClick={() => setCount(count + 1)}>IncreaseByOne</button> */}
        </div>
    )
}

export default HookCounterTwo