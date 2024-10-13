import React from 'react'
import UseToggle from './UseToggle'


const Toggle = () => {
    const {Toggle,flag} = UseToggle(false);

  return (
    <div>
        <p>{flag ? 'YES' : 'NO'}</p>
        <button onClick={Toggle}>Toggle</button>
    </div>
  )
}

export default Toggle