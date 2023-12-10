//example of the class Component
import { Component } from "react";
import React from "react";
// class Welcome extends Component{
//     render(){
//         return <h1>Welcome {this.props.name} a.k.a. {this.props.heroName}</h1>
//     }
// }

//below is the example of destructuring the class components 

class Welcome extends Component {
    render() {
        const { name, heroName } = this.props
        // const { state1, state2 } = this.state   syntax of destructuring
        return (
            <h1>
                Welcome {name} a.k.a. {heroName}
            </h1>
        )
    }
}


export default Welcome;