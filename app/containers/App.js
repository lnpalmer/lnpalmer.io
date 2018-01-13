import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'

import Counter from '../components/Counter'
import Navigator from './Navigator'
import About from './About'
import Projects from './Projects'

@connect(store => {
  return {view: store.view}
})
class App extends Component {

  render() {
    const { view, dispatch } = this.props

    const View = {
      'ABOUT': About,
      'PROJECTS': Projects,
    }[view]

    return (
      <div>
        <Navigator/>
        <Container>
          <View/>
        </Container>
      </div>
    )
  }

}

export default App
