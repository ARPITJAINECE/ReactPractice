// //mounting lifecycle Methods
// import React, { Component } from 'react'
// import LifecycleB from './LifecycleB'

// export class LifecycleA extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             name: 'Arpit Jain'
//         }
//         console.log('LifycycleA constructor')
//     }

//     static getDerivedStateFromProps(props, state) {
//         console.log("LifecyclesA's getDerivedStateFromProps")
//         return null
//     }

//     componentDidMount() {
//         console.log('LifecycleA componentdidMount method')
//     }

//     render() {
//         console.log('LifecycleA render method')
//         // now enclosing the lifecycleB in the LifeCycleA component
//         return (
//             <div>
//                 <div>LifeCycleA</div>
//                 <LifecycleB></LifecycleB>
//             </div>
//         )
//     }
// }

// export default LifecycleA


//above component, i.e. commented one is for mounting of the code
















//updating lifecycle Methods
import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Arpit Jain'
        }
        console.log('LifycycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecyclesA's getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentdidMount method')
    }

    shouldComponentUpdate() {
        console.log('LifecyclesA shouldComponentUpdate method')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecyclesA getSnapshotBeforeUpdate method')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate method')
    }


    changeState = () => {
        this.setState({
            name: 'My Name is Arpit Jain'
        })
    }


    render() {
        console.log('LifecycleA render method')
        // now enclosing the lifecycleB in the LifeCycleA component
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB></LifecycleB>
            </div>
        )
    }
}

export default LifecycleA