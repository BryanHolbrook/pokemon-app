import React from 'react'
import { mean } from '../utils/mean'

export default function Pikachu({ pokemon }) {
  const pokeNames = ['pikachu']
  const catchSome = pokemon?.reduce((acc, poke) => {
    let stats = {}
    console.log(pokemon)
    if (pokeNames.includes(poke.name)){
      const key = poke.name
      stats = {
        height: poke.height,
        weight: poke.weight,
        name: poke.name,
        image: poke.sprites.front_default
      }

      acc.push(stats)
    }
    return acc
  }, [])



  return (
    <div>
      <h1>Pikachu</h1>
      {catchSome.map((details, index) => {
        return (
          <div className='grid-container'>
            <div className='App-card' className='grid-item'>
              <div key={index}>
                <img alt='' src={details.image}/>
                <p>name: {details.name}</p>
                <p>height: {details.height}</p>
                <p>weight: {details.weight}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
