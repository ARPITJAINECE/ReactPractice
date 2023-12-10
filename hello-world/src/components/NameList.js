//for list rendering
import React from 'react'

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
    const persons = [
        {
            id: 1,
            name: 'arpit'
        },
        {
            id: 2,
            name: 'neha'
        },
        {
            id: 3,
            name: 'ruchi'
        }
    ]

    const personList = persons.map(person => (
        //using it in the Person.js
        // <h2>
        //     I am {person.name} having id: {person.id}
        // </h2>
    ))
    return <div>{personList}</div>
}

export default NameList