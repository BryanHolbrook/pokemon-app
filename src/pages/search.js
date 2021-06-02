import React, { useState } from 'react'
import Card from '../components/card'
import { Button, SearchInput } from 'evergreen-ui'

import styles from '../App.css'

export default function Search({ pokemon }) {
  const [isClicked, setClicked] = useState(false)

  const handleSearch = () => {
      setClicked(true)
  }

  return (
    <div className='grid-container'>
    <h1>Search</h1>
      <h1 className='visually-hidden'>Search</h1>
      <form  action='/search' method='get'>
        <label htmlFor='header-search'>
        </label>
            <SearchInput
              type='text'
              id='header-search'
              placeholder='Search Pokemon'
              name='s'
            />
        <Button type='submit' onChange={handleSearch}>Search</Button>
      </form>

      {isClicked && (
        pokemon.map((poke) => {
          return (
            <div className='grid-container'>
              <div className='App-card' className='grid-item'>
                <img alt='' src={poke.sprites.front_default}/>
                <img alt='' src={poke.sprites.back_default}/>
                <Card height={poke.height} weight={poke.weight} name={poke.name} />
              </div>
            </div>
          )
        })

      )}

    </div>
  )
}
