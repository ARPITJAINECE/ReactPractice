//illustration for the Hover Counter in render props
import React, { Component } from 'react'

class HoverCounterTwo extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }
    // incremetCount = () => {
    //     this.setState(prevState => {
    //         return { count: prevState.count + 1 }
    //     })
    // }
    //above one is the common that is to be defined in the Count.js file, and will bw shared using the Rnder Props way
    render() {
        const { count, incrementCount } = this.props
        return (
            <h2 onMouseOver={incrementCount}>Hovered {count} Times</h2>
        )
    }
}

export default HoverCounterTwo