import React, { useState } from 'react'
import useInput from '../hooks/useInput'

function UserForm() {

    // const [firstName, setFirstName] = useState('')
    // const [LastName, setLastName] = useState('')

    const [firstName, bindFirstName, resetFirstName] = useInput('')//for useInput custom hook
    const [LastName, bindLastName, resetLastName] = useInput('')//for useInput custom hook

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${LastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    {/* <input type='text' value={firstName} onChange={e => setFirstName(e.target.value)}></input> */}
                    <input type='text' {...bindFirstName}></input>
                </div>
                <div>
                    <label>Last Name</label>
                    {/* <input type='text' value={LastName} onChange={e => setLastName(e.target.value)}></input> */}
                    <input type='text' {...bindLastName}></input>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UserForm