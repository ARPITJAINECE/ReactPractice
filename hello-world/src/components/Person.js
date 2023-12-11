//list rendering and also proper refactoring the code
import React from 'react'

function Person({ person }) {//{person}-->this is the way to destructure the props in the function argument
    return (
        <div>
            <h2>
                I am {person.name} having id: {person.id}
            </h2>
        </div>
    )
}

export default Person