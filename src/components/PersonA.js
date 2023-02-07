import React from 'react'
import UpdatedComponent from './HOC'

function PersonA({ money, handleClick }) {

  return (
    <>
        <p>Arunava's Offering Amount ${money}</p>
        <button onClick={handleClick}>Increase Bid</button>
    </>
  )
}

export default UpdatedComponent(PersonA)
