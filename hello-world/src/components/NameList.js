//for list rendering
import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['arpit', 'neha', 'ruchi']
    // const nameList = names.map(name => <h2>{name}</h2>)
    // return ( 
    //     <div>
    //         {/* below is a method to do so, but not good */}
    //         {/* <h2>{names[0]}</h2>
    //         <h2>{names[1]}</h2>
    //         <h2>{names[2]}</h2> */}

    //         {/* so using the map method for proper rendering of the lists*/}
    //         {
    //             nameList
    //         }
    //     </div>
    // )

    const names = ['Arpit', 'Neha', 'Ruchi']

    // const persons = [
    //     {
    //         id: 1,
    //         name: 'arpit'
    //     },
    //     {
    //         id: 2,
    //         name: 'neha'
    //     },
    //     {
    //         id: 3,
    //         name: 'ruchi'
    //     }
    // ]

    // const personList = persons.map(person => (
    //     //using it in the Person.js
    //     // <h2>
    //     //     I am {person.name} having id: {person.id}
    //     // </h2>
    //     <Person key={person.id} person={person}></Person>   //key props are not 
    //                                                 //accessible in the child components
    // ))
    // return <div>{personList}</div>
    //best way to give key is to assign it to the index, as done in the below case
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>
}

export default NameList