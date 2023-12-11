//form handling i.e. react should be controlling the components
import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: ''
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(` ${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            //   <div className='App'>
            //     FormComponent
            //   </div>
            //we will be using the form tag
            <form onSubmit={this.handleSubmit}>
                {/* below is for the text */}
                <div>
                    <label>UserName</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>
                </div>
                {/* below is for the textarea */}
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                {/* below is for the select-option */}
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form