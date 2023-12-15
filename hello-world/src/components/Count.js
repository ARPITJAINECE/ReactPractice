//illustration of how the ccode is shared using the render props method
//this component is ging to be our container component, which holds the common functionality
//to be linked to the ClickCounterTwo.js and the HoverCounterTwo.js files for sharing the common functionalities
import React, { Component } from 'react'

class Count extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.incrementCount)}
            </div>
        )
    }
}

export default Count