//we will be fetchig the data of the individual post from the jsonplaceholder site
//rfce
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetchingIndividual() {
    // we will be needing the empty object to store whole object, not just an array
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])
    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)}></input>
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFetchingIndividual