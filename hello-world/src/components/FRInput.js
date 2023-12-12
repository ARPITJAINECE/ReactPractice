//this illustrates the forwarding of the refs, passing one of the component to its one or more child components
//to be linked to the FRParentInput.js
import React from 'react'

// function FRInput() {
//     return (
//         <div>
//             <input type='text'></input>
//         </div>
//     )
// }
//above is the old and not much used way in forwardingRef
//we much of the time, use the arrow function style of writing even the functional components

const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type='text' ref={ref}></input>
        </div>
    )
})


export default FRInput