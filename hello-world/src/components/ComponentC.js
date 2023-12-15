//illustration of the context to pass the value of the userName as context
// calling componentE in componentC
import React, { Component } from 'react'
import ComponentE from './ComponentE'

class ComponentC extends Component {
  render() {
    return (
      <div>
        <ComponentE></ComponentE>
      </div>
    )
  }
}

export default ComponentC