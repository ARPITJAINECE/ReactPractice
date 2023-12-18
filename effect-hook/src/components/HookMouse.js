//illustration of capturing the live coordinates of the mouse, using the functional
//component and the useEffect hook
//it will be linked to the MouseContainer.js, as it will toggle the display of the coordinates
import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        // in return we always write the clean-up code,i.e. equivalent to componentWillUnmount
        //cancelling subscriptions, times and removing the Eventlisteners
        return () => {
            console.log('Component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }

    }, [])//we will be using the empty dependency array, as we only want to call it once on the initial rendering of the output
    return (
        <div>
            Hooks X - {x} and Y - {y}
        </div>
    )
}

export default HookMouse