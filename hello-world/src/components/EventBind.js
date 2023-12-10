//create a class component
import React, { Component } from 'react'

class EventBind extends Component {
    //use rconst snippet to make a constructor in the class coponent
    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }

        //binding the event in the constructor as the third approach
        // this.clickHandler = this.clickHandler.bind(this);

    }

    clickHandler() {
        this.setState({
            message: "GoodBye"
        })
        // console.log("GoodBye")
    }

    //binding the events by using the 4th way to do so
    clickHandler = () => {
        this.setState({
            message: 'GoodBye!!!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button>//first approach is to use the bind method */}
                {/* //second approach is to use the arrow function way to bind the events,below is done that */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                {/* next approach is good approach in respect to above two,
                i.e. binding the event in the constructor */}
                {/* <button onClick={this.clickHandler}>Click</button> */}
                {/* 4th approach is the use of the arrow functions to bind the events */}
                <button onClick={this.clickHandler}>Click</button>
                {/* last one i.e. the 4th approach is the best approach to bind the events */}
            </div>
        )
    }
}

export default EventBind