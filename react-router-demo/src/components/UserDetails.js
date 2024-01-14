//below is the normal userDetails component
// import React from 'react'

// export const UserDetails = () => {
//     return (
//         <div>
//             Details about Users
//         </div>
//     )
// }

//now frombelow we will be using the UserDetails component file for understanding,
//the concept of the useParams in the react, i.e. to fetch sme particular details from the 
//URL into our program
import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
    // const params = useParams()
    // const userId = params.userId  //userId must be the same as we have entered in the App.js file

    //OR, we can also destructure the userId in the first line only

    const { userId } = useParams()


    return (
        <div>
            Details about Users : {userId}
        </div>
    )
}
