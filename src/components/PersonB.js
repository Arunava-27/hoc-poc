import React from 'react'
import UpdatedComponent from './HOC'

function PersonB({money, handleClick}) {

  return (
    <>
        <p>Rahul's Offering Amount ${money}</p>
        <button onClick={handleClick}>Increase Bid</button>
    </>
  )
}

export default UpdatedComponent(PersonB)
