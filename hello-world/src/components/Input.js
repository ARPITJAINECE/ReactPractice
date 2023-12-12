//refs with Class Components
//it is having a link with the FocusInput.js
//this is the child component for the FocusInput.js
import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    focusInput() {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}></input>
            </div>
        )
    }
}

export default Input