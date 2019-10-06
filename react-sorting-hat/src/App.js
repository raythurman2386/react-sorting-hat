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
import Hogwarts from './assets/the_sorting_hat.png'

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
      <div className='App'>
        <h1>Sorting Hat</h1>
        <img src={Hogwarts} alt='Hogwarts' />
        <Switch>
          <Route
            to='/gryffindor'
            render={<HouseView {...props} house={this.state.gryffindor} />}
          />
          <Route
            to='/hufflepuff'
            render={<HouseView {...props} house={this.state.hufflepuff} />}
          />
          <Route
            to='/ravenclaw'
            render={<HouseView {...props} house={this.state.ravenclaw} />}
          />
          <Route
            to='/slytherin'
            render={<HouseView house={this.state.slytherin} />}
          />
        </Switch>
      </div>
    )
  }
}

export default App
