import React from 'react'
import '..'


export default function Card ({ children, name, weight, height }) {
  return (

/*name heigh weight data inputs*/

    <div className='App'>
      <h3>{name || '' }</h3>
      <p>Ht : {height || ''} - Wt : {weight || ''}</p>

      <div className='App'>
        {children}


      </div>
    </div>
  )
}
