import React, { Component } from 'react'

// Import my house data
import {
  griffindorData,
  hufflepuffData,
  ravenclawData,
  slytherinData,
} from './data'
import HouseView from './views/HouseView'

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
        <HouseView house={this.state.gryffindor} />
      </div>
    )
  }
}

export default App
