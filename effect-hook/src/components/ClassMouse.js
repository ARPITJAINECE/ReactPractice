//this will be for illustration of the useEffect hook for running the effect only once
//we will be using the class component for this and will be telling how much code we need to
//write if we dont use useEffect hook

import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }
    logMouseposition = e => {
        this.setState({ x: e.clientX, y: e.clientY })
        console.log(`x is ${this.state.x} and y is ${this.state.y}`)
    }
    componentDidMount() {
        window.addEventListener('mousemove', this.logMouseposition)

    }
    render() {
        return (
            <div>
                X - {this.state.x} and the Y - {this.state.y}
            </div>
        )
    }
}

export default ClassMouse