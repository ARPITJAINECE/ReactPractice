//illustration for the RENDER Props, a way to share functionalities between many components
import React, { Component } from 'react'

class ClickCounterTwo extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }
    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return { count: prevState.count + 1 }
    //     })
    // }
    //above one is the common that is to be defined in the Count.js file, and will bw shared using the Rnder Props way
    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} Times</button>
            </div>
        )
    }
}

export default ClickCounterTwo