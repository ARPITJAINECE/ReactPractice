//illustration of the counter program using the basic class Components
//later on we will be making the Counter program using the hooks anf the functional components
//which will make u more clear about how the hooks simplify the problems of the class components
import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    incremetCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.incremetCount}>Count {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter