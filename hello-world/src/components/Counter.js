import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('CallBack value is : ', this.state.count)//second parameter in  the setState method
        // }
        // )
        this.setState((prevState) => ({
            count: prevState.count + 1
        }),
        ()=>{
            console.log('callBack value is : ',this.state.count)
        })
        console.log(this.state.count)//this function is not in sync with the setState method , 
        //so to make it sync setState takes two parameers as the arguments
    }

    incremetFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <>
                <div>
                    Count - {this.state.count}
                </div>
                {/* <button onClick={() => this.increment()}> Increment </button> */}
                <button onClick={() => this.incremetFive()}> Increment  </button>
            </>
        )
    }
}

export default Counter