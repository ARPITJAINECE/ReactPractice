import React, { useEffect, useRef } from 'react'

function FocusInput() {

    const inputRef = useRef(null)

    useEffect(() => {
        //we want to focus on the input element as the page loaded
        inputRef.current.focus()//current will set the current property with the DOM nodes
    }, [])

    return (
        <div>
            <input ref={inputRef} type='text'></input>
        </div>
    )
}

export default FocusInput