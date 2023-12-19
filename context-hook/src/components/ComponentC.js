//this will be for illustration of why we need the useContext hooks, but in this we will be
//using the props way to pass the data
//from C to E to F

import React from 'react'
import ComponentE from './ComponentE'

function ComponentC() {
    return (
        <div>
            <ComponentE></ComponentE>
        </div>
    )
}

export default ComponentC