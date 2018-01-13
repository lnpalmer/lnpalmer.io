import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse } from 'reactstrap'

@connect(store => {
  return {view: store.view}
})
class Navigator extends Component {

  render() {
    const { view, dispatch } = this.props

    const setView = value => dispatch({type: 'SET_VIEW', value: value})

    return (
      <Navbar className="navbar-dark bg-dark" expand="md">
        <NavbarBrand style={{color: '#efefef'}}>lnpalmer</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem active={view == 'ABOUT'}>
            <NavLink onClick={() => setView('ABOUT')}>about</NavLink>
          </NavItem>
          <NavItem active={view == 'PROJECTS'}>
            <NavLink onClick={() => setView('PROJECTS')}>projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='https://lnpalmer.github.io'>blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='mailto:lukas@lnpalmer.io'>contact</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }

}

export default Navigator
