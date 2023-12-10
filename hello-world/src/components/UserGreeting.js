//conditional rendering..
//to solve, if I was loggedIn, then the msg. must be WelcomeArpit
//and if some other loggedin, then msg.must be displayed as WelcomeGuest
//4 ways to do so
//1. if-else
//2. element variables
//3. ternary conditional opeartor
//4. short circuit operator
import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        //1. using if-else way
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome Arpit Jain
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }

        //2. using the element variables
        // let message;
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Arpit Jain</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return (
        //     <div>{message}</div>
        // )

        //3. using ternary operator (we can even use this approach inside the JSX)
        // return (
        //     this.state.isLoggedIn ? (
        //         <div>Welcome Arpit Jain</div>
        //     ) : (
        //         <div>Welcome Guest</div>)
        // )

        //4. using the short circuit opeartor approach
        //it is a specific case of the ternary approach
        //we have to do like, if I am loggedIn, then display WelcomeArpit and if some other is 
        //loggedIn, then display nothing
        return (
            this.state.isLoggedIn && <div>Welcome Arpit </div>
        )

    }
}

export default UserGreeting