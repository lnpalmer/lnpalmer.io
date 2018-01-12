import React, { Component } from 'react'

class Counter extends Component {

  render() {
    const { value } = this.props
    return <h3>Counter: {value}</h3>
  }

}

export default Counter
