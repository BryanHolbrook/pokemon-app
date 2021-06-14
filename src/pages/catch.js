import React, { useState } from 'react'
import Card from '../components/card'
import { Button } from 'evergreen-ui'

import styles from '../App.css'

export default function Catch({ pokemon }) {
  const [isClicked, setClicked] = useState(false)

  const handleClick = () => {
      setClicked(true)
  }

  return (
    <div>
      <h1 className='title'>Catch Pokés Mon</h1>
      <div className='grid-container'>
      <Button className='button' onClick={handleClick}>Catch Pokes, Mon!</Button>

      <div className='grid-container'>
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
      </div>
    </div>
  )
}
