//illustration of how to use the arrays in the useState hook
import React, { useState } from 'react'

function HookCounterFour() {
    const [items, setItems] = useState([])
    const addItem = () => {
        // ...items ----> it means we are making the copy of the whole array
        //and in the second argument, we are making the changes in the particular 
        // field related to that array or the any other object
        //in this case, in the second argument we are appending the next object in the array
        //that's why we have used the {id: items.length, value: Math.floor(Math.random() * 10) + 1 }
        //we are using the {} sign to append the new object in the array
        //initially the length of the array is 0, so id:0-----tyhen length is 1, so id:1....
        setItems([...items, { id: items.length, value: Math.floor(Math.random() * 10) + 1 }])
    }
    return (
        <div>
            <button onClick={addItem}>Add Number</button>
            <ul>
                {
                    items.map(item => <li key={item.id}>
                        {
                            item.value
                        }
                    </li>)
                }
            </ul>
        </div>
    )
}

export default HookCounterFour