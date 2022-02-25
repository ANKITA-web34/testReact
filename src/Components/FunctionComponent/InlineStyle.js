import React from 'react'

const styling = {
    fontSize: '5rem',
    color: 'pink'
}

function InlineStyle() {
  return (
    <div style={styling}>
        Harry Styles
        <h1 className='error'>Error</h1>
    </div>
   
  )
}

export default InlineStyle