import React, { useState } from 'react'
import Card from '../components/card'
import { Button } from 'evergreen-ui'

export default function Home({ pokemon }) {
  const [isClicked, setClicked] = useState(false)

  const handleClick = () => {
      setClicked(true)
  }

  return (
    <div>
      <h1>Home</h1>

      <Button onClick={handleClick}>Catch Pokes, Mon!</Button>

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
