import { useState, useEffect } from 'react'
import './App.css'


import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Catch from './pages/catch'
import Pikachu from './pages/pikachu'
import Stats from './pages/stats'
import Search from './pages/search'
import Cover from './pages/cover'
import styled from 'styled-components'



const Nav = styled.nav`
 background-color: pink;
 box-shadow: 0px 0px 30px rgb(0 0 0 / 10%);
`

export default function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
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
          <Link to="/cover">Goodbye</Link>
        </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/stats">Stats</Link>
          </li>
          <li>
            <Link to="/pikachu">Pikachu</Link>
          </li>
          <li className="logo">
            <Link to="/">PokéMon For Everyone</Link>
          </li>
        </ul>
      </Nav>

      <div className="header">
        <Route path="/cover">
          <Cover/>
        </Route>

        <Route path="/" exact>
          <Catch pokemon={data} />
        </Route>

        <Route path="/pikachu">
          <Pikachu pokemon={data} />
        </Route>

        <Route path="/stats">
          <Stats pokemon={data} />
        </Route>

        <Route path="/search">
          <Search/>
        </Route>
      </div>
    </Router>
  )
}
