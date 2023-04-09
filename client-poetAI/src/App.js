import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState(undefined)


  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof backendData === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        <p>{backendData}</p>
      )}
    </div>
  )
}

export default App