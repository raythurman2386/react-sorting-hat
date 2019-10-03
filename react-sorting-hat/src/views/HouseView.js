import React from 'react'

const HouseView = props => {
  return (
    <div>
      <h1>{props.house.house}</h1>
      <img src={props.house.crest} alt={props.house.house} />
    </div>
  )
}

export default HouseView
