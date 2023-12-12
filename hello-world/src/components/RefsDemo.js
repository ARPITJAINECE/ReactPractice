// //usage of refs in react for accessing the Dom elements in the react
//most recent way to create Refs
// import React, { Component } from 'react'

// class RefsDemo extends Component {
//     // first step for creating ref is declare a constructor and assign ref in it
//     constructor(props) {
//         super(props)
//         this.inputRef = React.createRef()
//     }

//     componentDidMount() {
//         this.inputRef.current.focus()
//         console.log(this.inputRef)
//     }

//     clickHandler = () => {
//         alert(this.inputRef.current.value)
//     }
//     render() {
//         return (
//             <div>
//                 <input type='text' ref={this.inputRef}></input>
//                 <button onClick={this.clickHandler}>Click</button>
//             </div>
//         )
//     }
// }

// export default RefsDemo




//usage of refs in react for accessing the Dom elements in the react
//second way to do so----> CallBack Refs
import React, { Component } from 'react'

class RefsDemo extends Component {
    // first step for creating ref is declare a constructor and assign ref in it
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        //in below lines we have the CallBack Refs
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        //check if the value exists or not
        if (this.cbRef) {
            this.cbRef.focus()
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}></input>
                {/* it will focus on the second textbox as soon as it mounts on the webpage */}
                <input type='text' ref={this.setCbRef}></input>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo