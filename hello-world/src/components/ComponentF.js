//illustration of the context to pass the value of the userName as context
//to be linked to the componentE
import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username) => {
                        return (
                            <div>
                                Hello {username}
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF