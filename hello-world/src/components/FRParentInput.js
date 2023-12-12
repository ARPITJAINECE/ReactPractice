//to be linked to the FRInput.js

import React, { Component } from 'react'
import FRInput from './FRInput'

export class FRParentInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }

    
    render() {
        return (
            <div>
                <FRInput ref={this.inputRef}></FRInput>
                {/* we must write down the code, as if we click on the button, then the 
                focus must be on the childs input tag */}
                <button onClick={this.clickHandler}>FocusInput</button>
            </div>
        )
    }
}

export default FRParentInput