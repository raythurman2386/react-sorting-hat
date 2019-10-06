import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Hogwarts from '../assets/the_sorting_hat.png'

const Home = () => {
  return (
    <HomeWrapper>
      <h1>Welcome to Hogwarts</h1>
      <img src={Hogwarts} alt='Hogwarts' />
      <StyledLink to='#'>Click to be Sorted</StyledLink>
    </HomeWrapper>
  )
}

export default Home

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 98%;
  opacity: 0.8;
  z-index: 1;
`
const StyledLink = styled(Link)`
  padding: 5px 12px;
  width: 250px;
  background-color: white;
  border-radius: 5px;
  border: none;
  text-decoration: none;
  text-align: center;

  :hover {
    background-color: #999;
    color: white;
    transition: 0.3s;
  }
`
