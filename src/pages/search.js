import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/card'

import styles from '../App.css'

export default function Search() {
  // const [isClicked, setClicked] = useState(false)
  const [name, setName] = useState()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const handleSearch = (event) => {
    event.preventDefault()

    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(function (response) {
        return response.data
      })
      .then(function (result) {
        setData(result)
      })
      .finally(function () {
        setLoading(false)
      })
  }

  return (
    <div>
    <h1 className="title">Search</h1>
    <div>
      <h1 className='visually-hidden'>Search</h1>
      <form method='get' onSubmit={handleSearch}>
        <label htmlFor='header-search'>
        </label>
            <input
              type='text'
              id='header-search'
              placeholder='Search Pokés... Mon!'
              onChange={(event) => setName(event.target.value)}
              name='s'
            />
        <button type='submit'>Search</button>
      </form>



      {!loading && (
            <div className='grid-container'>
              <div className='App-card' className='grid-item'>
                <img src={data?.sprites?.front_default || ''}/>
                <h3>{data?.name || ''}</h3>
                <p>Ht:{data?.height || ''}| Wt:{data?.weight || ''}</p>

              </div>
            </div>
          )}

      </div>
    </div>
  )
}
