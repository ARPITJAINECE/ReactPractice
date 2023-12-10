//use rfce snippet to create a boiler plate code for the functional components in react
//this is for the event handling in the functional components
import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log("Button Clicked");
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
        //do not use the onClick={clickHandler()}----> parantheses in clickHandler as
        //it will the calling of the function, not the function, so it will by default call
        //the clickHandler function as sooon as the result is displayed on the DOM.
    )
}

export default FunctionClick