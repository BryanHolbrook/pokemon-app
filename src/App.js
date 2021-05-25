import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from './pages/home'
import Pikachu from './pages/pikachu'
import Stats from './pages/stats'
import Search from './pages/search'
import TestData from './test-data.json'
import styled from 'styled-components'

const Header = styled.div`
  background-color: ${props => props.primary ? 'pink' : '#282c34' };
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Nav = styled.nav`
 background-color: purple;
 box-shadow: 0px 0px 30px rgb(0 0 0 / 30%);
`

export default function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=16&offset=0')
      .then(function (response) {
       return response.data.results
      })
      .then(function (allPokemon) {
       allPokemon.forEach((poke) => {
         axios.get(poke.url)
         .then(function (response){
           setData((pokeList) => [...pokeList, response.data])
           // [{},{},{}]
         })
       })
      })
      .finally(function () {
        setLoading(false)
      })
  },[])

  if (loading) return "Loading..."

  return (
    <Router>
      <Nav>
        <ul>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/stats">Stats</Link>
          </li>
          <li>
            <Link to="/pikachu">Pikachu</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </Nav>


      <Header primary>

        <Route path="/" exact>
          <Home pokemon={data} />
        </Route>

        <Route path="/pikachu">
          <Pikachu />
        </Route>

        <Route path="/stats">
          <Stats pokemon={data} />
        </Route>

        <Route path="/search" component={Search} />
      </Header>
    </Router>
  )
}
