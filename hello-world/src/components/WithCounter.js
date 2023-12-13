//illustration for the HOC, to share common functionalities between other components
// import React from "react";

// const WithCounter = (WrappedComponent) => {
//     class WithCounter extends React.Component {
//         render() {
//             return <WrappedComponent name='Arpit'></WrappedComponent>
//         }
//     }
//     return WithCounter
// }
// export default WithCounter
//now we are applying this HOC to our ClickCounter and also to the Hovercounter
//above one is the basic understanding of using the HOc, passing my name to the Click and The HoverCounter

//below one is the using of the counter component as the HOC in other components

import React from "react";

const WithCounter = (WrappedComponent,incrementNumber) => {
    //count state and the IncrementCount method are common in both of the components,
    //i.e. the ClickCounter.js and the HoverCounter.js components, so we are using
    //the incrementCount method as the HOC, so we can use this in other components
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }
        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementNumber }
            })
        }
        render() {
            console.log(this.props.name)
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props }></WrappedComponent>
        }
    }
    return WithCounter
}
export default WithCounter