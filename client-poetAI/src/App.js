import React, { useState } from 'react'
import { Form } from './components/Form'
import { Poem } from './components/Poem'

function App() {
  const [poemData, setPoemData] = useState('');
  const [poemType, setPoemType] = useState('');
  const [dedicated, setDedicated] = useState('');

  const handleFormSubmit = (poem, type, dedicated) => {
    poem = poem.replace(",", ",\n").replace(".", ".\n")
    setPoemData(poem)
    setPoemType(type)
    setDedicated(dedicated)
  }

  return (
    <div>
      <Form onSubmit={handleFormSubmit}/>
      <Poem poem={poemData} poemType={poemType} dedicated={dedicated}/>
    </div>
  )
}

export default App