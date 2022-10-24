import React from 'react'

const Person = ({id,name}) => {
  return (
      <li key={id}> {name}</li>
  )
}

export default Person