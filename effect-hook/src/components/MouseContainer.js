//it will be linked to the HookMouse.js, and will be illustrating the ComponnetWillUnmount
//need replacement with theuseEffect hook
//we will bw making a button that will be used to toggle the visibility of the component
import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            {/* we will be making a button that will toggle the display button from true to false or vice-versa */}
            <button onClick={() => setDisplay(!display)}>ToggleDisplay</button>
            {display && <HookMouse></HookMouse>}
        </div>
    )
}

export default MouseContainer