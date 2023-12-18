//we will be using the functional components + usestate and useeffect hooks for making a
//counter, that will update its value by  in every second
import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
    }


    useEffect(() => {

        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter