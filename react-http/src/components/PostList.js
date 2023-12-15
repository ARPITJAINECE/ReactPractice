//we are creating the HTTP-GET requests using the fake API requests from the site jsonplaceholder.typicode.com
//we will be using the GET request for /posts
import axios from 'axios'
import React, { Component } from 'react'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ''
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'Error in retrieving the data' })

            })
    }
    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                lists of posts
                {
                    posts.length ?
                        posts.map(post => <div key={post.id}>{post.title}</div>) :
                        null
                }
                {
                    errorMsg ? <div>{errorMsg}</div> : null
                }
            </div>
        )
    }
}

export default PostList