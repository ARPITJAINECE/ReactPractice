//this will illustrate the use of the useState hook with objects
import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <form>
                {/* we will be using the two field in the setter method, one is to save the whole name onject and second pne will be used to do the changes in the name object but only firstName can be changed */}
                <input type='text' value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })}></input>
                <input type='text' value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })}></input>
                <h2>Your firstName is : {name.firstName} and lastName is : {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default HookCounterThree