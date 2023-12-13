//HOC in case of hover counter, that how many times did the user hovers on a given paragraph
//to be linked with the WithCounter.js for HOC
import React, { Component } from 'react'
import WithCounter from './WithCounter'

export class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }
    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return {
    //             count: prevState.count + 1
    //         }
    //     })
    // }
    //commenting the above constructor and the incrementCount method, as we have declared
    //both of them as the HOC in the WithCounter.js component and will be using them,
    //as the HOC from the parent to the child components
    render() {
        // const { count } = this.state
        //to use HOC, we need to destructure the count and incrementCount from this.props
        const { count, incrementCount } = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>Hovered {count} times on the given paragaraph</h2>
            </div>
        )
    }
}

export default WithCounter(HoverCounter, 10)