//this will be the illustration of the Counter program with the help of the functional components
//and we will be using the useState hook (useState hooks + functional components)
import React, { useState } from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter