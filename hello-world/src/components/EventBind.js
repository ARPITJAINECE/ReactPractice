//create a class component
import React, { Component } from 'react'

class EventBind extends Component {
    //use rconst snippet to make a constructor in the class coponent
    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }
    }

    clickHandler() {
        this.setState({
            message: "GoodBye"
        })
        // console.log("GoodBye")
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}//first approach is to use the bind method
                //second approach is to use the arrow function way to bind the events
                <button onClick={this.clickHandler.bind(this)}>Click</button>
            </div>
        )
    }
}

export default EventBind