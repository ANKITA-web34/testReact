import React from 'react'

function ChildOfNameList({person}) {
  return (
    <div><h2>I am {person.name}, I am {person.age} years old!</h2></div>
  )
}

export default ChildOfNameList