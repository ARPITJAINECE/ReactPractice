//regular component to be linked with the Pure-Component.js
import React, { Component } from 'react'

class RegularComponent extends Component {
  render() {
    console.log('***********regular component render ************');
    return (
      <div>
        Regular Component
      </div>
    )
  }
}

export default RegularComponent