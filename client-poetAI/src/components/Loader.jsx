import React from 'react'
import BarLoader from 'react-bar-loader'

export const Loader = () => {
  return (
    <>
        <BarLoader color="#FEBBF6" height="4" style={{marginBottom:10}}/>
        <span style={{marginTop:10}}>Creando poema...</span>
    </>
  )
}
