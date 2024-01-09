import React, { useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(500000)

    // const incrementAge = () => {
    //     setAge(age + 1)
    // }
    
    //below is 
    const incrementAge = () => {
        setAge(age + 1)
    }


    const incrementSalary = () => {
        setSalary(salary + 10000)
    }
    return (
        <div>
            <Title></Title>
            <Count text="Age" count={age}></Count>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary}></Count>
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent