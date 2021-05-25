import React from 'react'
import '..'
import styles from './Card.css'


export default function Card ({ children, name, weight, height }) {
  return (

/*name heigh weight data inputs*/

    <div className='App'>
      <h3>{name || '' }</h3>
      <p>{height || ''}</p>
      <p>{weight || ''}</p>

      <div className='App'>
        {children}


      </div>
    </div>
  )
}
