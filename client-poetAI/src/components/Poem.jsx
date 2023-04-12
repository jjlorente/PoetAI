import React from 'react'
import './CSS/Poem.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

export const Poem = (props) => {
    let dedicated = ""
    dedicated = props.dedicated.charAt(0).toUpperCase() + props.dedicated.slice(1)
    return (
      <>
        {props.poem && (
          <div className='Poem'>
            <div className="copy-text"> 
              <CopyToClipboard className="CopyToClipboard" text={props.poem} onCopy={() =>alert('Poema copiado!')}>
                <FontAwesomeIcon className="icon" icon={faCopy} />            
              </CopyToClipboard>
            </div>
            <h2>{dedicated}</h2>
            <pre className='poem-pre'>
              {props.poem}
            </pre>
          </div>
        )}
      </>
    )
  }
  
