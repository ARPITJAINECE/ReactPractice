//parent component to be linked with the Pure-Component.js
import React, { Component, PureComponent } from 'react'
import RegularComponent from './RegularComponent'
import PureComp from './PureComponent'

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Arpit Jain'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Arpit'
            })
        }, 2000)
    }

    render() {
        console.log('***********parents component render ************');
        return (
            <div>
                Parent Component
                <RegularComponent name={this.state.name}></RegularComponent>
                {/* <PureComp name={this.state.name}></PureComp> */}
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp