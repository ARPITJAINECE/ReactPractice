////illustration of the context to pass the value of the userName as context
//linked to the ComponentC
import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentE extends Component {
    render() {
        return (
            <div>
                Component E context {this.context}
                <ComponentF></ComponentF>
            </div>
        )
    }
}

ComponentE.contextType = UserContext

export default ComponentE