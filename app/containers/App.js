import React, { Component } from 'react'
import { connect } from 'react-redux'

import Counter from '../components/Counter'

@connect(store => {
  return {count: store.count}
})
class App extends Component {

  render() {
    const { count, dispatch } = this.props

    const clickUp = evt => {
      dispatch({type: 'SET_COUNT', value: count + 1})
    }

    const clickDown = evt => {
      dispatch({type: 'SET_COUNT', value: count - 1})
    }

    return (
      <div>
        <h2>lnpalmer</h2>
        <button onClick={clickUp}>Plus</button>
        <button onClick={clickDown}>Minus</button>
        <Counter value={count}/>
      </div>
    )
  }

}

export default App
