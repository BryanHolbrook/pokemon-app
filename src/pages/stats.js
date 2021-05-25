import React, { useState, useEffect } from 'react'
import Card from '../components/card'
import { Button } from 'evergreen-ui'
import styles from '../components/Card.css'
import { mean } from '../utils/mean'

export default function Stats({ pokemon }) {
  const pokeNames = ['charmander','bulbasaur', 'squirtle','pidgey']
  const catchSome = pokemon?.reduce((acc, poke) => {
    let stats = {}

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
      <h1>Stats</h1>
      {catchSome.map((details, index) => {
        return (
          <div key={index}>
            <img src={details.image}/>
            <p>name: {details.name}</p>
            <p>mean: {mean(details.height, details.weight)}</p>
          </div>
        )
      })}
    </div>
  )
}
