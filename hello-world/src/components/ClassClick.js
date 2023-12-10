//use rce to craete the class components
import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() {
        console.log('Button clicked from the class component');
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>ClickMe</button>
            </div>
            //for defining the function in the claass component use the this keyword always
        )
    }
}

export default ClassClick;