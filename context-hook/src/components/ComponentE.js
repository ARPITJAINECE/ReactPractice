//this will be for illustration of why we need the useContext hooks, but in this we will be
//using the props way to pass the data
//from C to E to F

import React from 'react'
import ComponentF from './ComponentF'

function ComponentE() {
    return (
        <div>
            <ComponentF></ComponentF>
        </div>
    )
}

export default ComponentE