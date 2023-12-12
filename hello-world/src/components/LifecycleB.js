// //mounting lifecycle Methods
// import React, { Component } from 'react'

// export class LifecycleB extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             name: 'Arpit Jain'
//         }
//         console.log('LifecycleB constructor')
//     }

//     static getDerivedStateFromProps(props, state) {
//         console.log("LifecyclesB's getDerivedStateFromProps")
//         return null
//     }

//     componentDidMount(){
//         console.log('LifecycleB componentdidMount method')
//     }

//     render() {
//         console.log('LifecycleB render method')
//         return (
//             <div>
//                 LifecycleB
//             </div>
//         )
//     }
// }

// export default LifecycleB

//above is the mounting method





//updating lifecycle Methods
import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Arpit Jain'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecyclesB's getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentdidMount method')
    }

    shouldComponentUpdate() {
        console.log('LifecyclesB shouldComponentUpdate method')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecyclesB getSnapshotBeforeUpdate method')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate method')
    }


    render() {
        console.log('LifecycleB render method')
        return (
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB