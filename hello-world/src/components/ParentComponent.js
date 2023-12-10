import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        this.greetparent = this.greetparent.bind(this);

    }

    greetparent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetparent} />
            </div>
        )
    }
}

export default ParentComponent


//in a nutshell
//1.  in the parent component, define the method
// greetparent(childName) {
//     alert(`Hello ${this.state.parentName} from ${childName}`)
// }

//2. in the child cmponent tag, pass the child component method as the props
//<ChildComponent greetHandler={this.greetparent} />

//3. in the child component, access the method as the props object, use the arrow function syntax