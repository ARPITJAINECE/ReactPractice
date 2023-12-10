//this is the example of the functional component in the react

import React from 'react'

// function Greet(){
//     return <h1>Hello Arpit</h1>
// }

//instead of above normal method we can also use the arrow funtion way make components

// const Greet = (props) => {
//     console.log(props);
//     return (
//         <div>
//             <h1>Hello {props.name} a.k.a. {props.heroName}</h1>
//             {props.children}
//         </div>
//     )
// };

//below is the example of the destructuring the functional components using the {} sign
//to further access the name and the heroName, now don't use the props keyword in the 
//definition of the return statement
//     const Greet = ({name,heroName}) => {
//     return (
//         <div>
//             <h1>Hello {name} a.k.a. {heroName}</h1>
//         </div>
//     )
// };

//above one is the first way to destructure the props, now below is the second way to 
//further destructure the props, i.e. by destructuring the function body

const Greet = props => {
    const{name, heroName}=props
    return (
        <div>
            <h1>Hello {name} a.k.a. {heroName}</h1>
        </div>
    )
};

export default Greet;