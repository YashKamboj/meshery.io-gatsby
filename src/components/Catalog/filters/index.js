import React from 'react'

const filters = ({filter}) => {
  return (
      {filter.map((filter) => {
          return(
    <div>
        <h3>{filter.name}</h3>
        <p>{filter.value}</p>
    </div>
          )
      })}
  )
}

export default filters