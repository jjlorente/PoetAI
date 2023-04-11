import React from 'react'
import './CSS/Poem.css'

export const Poem = (props) => {
    return (
      <>
        {props.poem && (
          <div className='Poem'>
            <h3>Dedicado a {props.dedicated}</h3>
            {props.poem}
          </div>
        )}
      </>
    )
  }
  
