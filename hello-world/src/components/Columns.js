//second example of react-fragment linked to table.js
import React from 'react'

function Columns() {
    const items = [
        {
            id: 1,
            title: 'first'
        },
        {
            id: 2,
            title: 'second'
        }
    ]
    return (
        <React.Fragment>
            {
                items.map(item => (
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
            <td>Name</td>
            <td>Arpit</td>
        </React.Fragment>
    )
}

export default Columns