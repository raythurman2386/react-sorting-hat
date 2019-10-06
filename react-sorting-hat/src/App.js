import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'

// Import my house data
import {
  griffindorData,
  hufflepuffData,
  ravenclawData,
  slytherinData,
} from './data'
import HouseView from './views/HouseView'
import Home from './views/Home'

class App extends Component {
  // constructor for state
  constructor() {
    super()
    this.state = {
      gryffindor: griffindorData,
      hufflepuff: hufflepuffData,
      ravenclaw: ravenclawData,
      slytherin: slytherinData,
    }
  }

  render() {
    return (
      <AppWrapper className='App'>
        <Switch>
          <Route path='' component={Home} />
          <Route
            path='/gryffindor'
            render={props => (
              <HouseView {...props} house={this.state.gryffindor} />
            )}
          />
          <Route
            path='/hufflepuff'
            render={props => (
              <HouseView {...props} house={this.state.hufflepuff} />
            )}
          />
          <Route
            path='/ravenclaw'
            render={props => (
              <HouseView {...props} house={this.state.ravenclaw} />
            )}
          />
          <Route
            path='/slytherin'
            render={props => (
              <HouseView {...props} house={this.state.slytherin} />
            )}
          />
        </Switch>
      </AppWrapper>
    )
  }
}

export default App

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`
