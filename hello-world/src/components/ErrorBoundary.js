//illustrates how errors arre handled in react, defining the Error Boundaries
//linked to the Hero.js
import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
            //initially the hasError is false, but if any error occurs,then that property osis
            //setto true
        }
    }
    //to make it as error boundary, define either of the one error lifecycle methods
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    //componentDidCatch is mainly used for logging purpose
    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went, Wrong</h1>
        }
        //below refers to the component that we are actually rendering
        return this.props.children
    }
}

export default ErrorBoundary