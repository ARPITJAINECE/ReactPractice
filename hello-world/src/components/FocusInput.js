//refs with class component and it is to be linked with the Input.js
//this is the parent component for the Input.js
import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()

    }
    clickHandler = () => {
        this.componentRef.current.focusInput()  //this  focusInput method is defined in the child component, i.e. Input.js
    }

    render() {
        return (
            <div>
                <Input ref={this.componentRef}></Input>
                <button onClick={this.clickHandler}>FocusInput</button>
            </div>
        )
    }
}

export default FocusInput