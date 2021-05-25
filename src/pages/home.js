import React, { useState } from 'react'
import Card from '../components/card'
import { Button } from 'evergreen-ui'

export default function Home({ pokemon }) {
  const [isClicked, setClicked] = useState(false)
  const [names, setNames] = useState([])

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
                <Card height={poke.height} weight={poke.weight} name={poke.name}>
                  <img src={poke.sprites.front_default}/>
                </Card>

                <Card height={poke.height} weight={poke.weight} name={poke.name}>
                  <img src={poke.sprites.back_default}/>
                </Card>
              </div>
            </div>
          )
        })

      )}

      {/*{pokemon.abilities.map((abs, index) => {
        return <h3 key={index}>{abs.ability.name}</h3>
      })}*/}

      {/*{pokemon.stats.map((stat) => {
        return (
          <>
            <p>{stat.effort}</p>
            <p>{stat.base_stat}</p>
          </>
        )
      })}*/}

    </div>
  )
}
