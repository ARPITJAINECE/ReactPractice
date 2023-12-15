//illustration for the Render props concept, to use the functionalities in many components
import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
                {/* Arpit Jain */}
                {/* {this.props.name} if we pass directly string as name='Arpit', then this line is valid */}
                {/* now if we have passed a function as a props in User element which return name string "Arpit", so we have to use the below way: */}
                {this.props.render(false)}
            </div>
        )
    }
}

export default User