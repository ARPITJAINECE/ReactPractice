//illustration part 1 for the HigherOrderComponents
//to be linked with the WithCounter.js for HOC
import React, { Component } from 'react'
import WithCounter from './WithCounter'
class ClickCounter extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }
    // increamentCount = () => {
    //     this.setState(prevState => {
    //         return { count: prevState.count + 1 }
    //     })
    // }
    //commenting the above constructor and the incrementCount method, as we have declared
    //both of them as the HOC in the WithCounter.js component and will be using them,
    //as the HOC from the parent to the child components
    render() {
        // const { count } = this.state
        //to use HOC, we need to destructure the count and incrementCount from this.props
        const { count, incrementCount } = this.props
        console.log(count)
        return (
            <button onClick={incrementCount}>
                {this.props.name} Clicked {count} Times
            </button>
        )
    }
}

export default WithCounter(ClickCounter,5)