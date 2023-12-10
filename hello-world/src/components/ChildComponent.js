import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>GreetParent</button>
        </div>
    )
}

export default ChildComponent

//in this we are calling the parent component's method from the parent component to the child component