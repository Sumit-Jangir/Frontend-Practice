import React, { useState } from 'react'

function UseToggle(initialValue = false) {

    const [flag , setFlag] = useState(initialValue);

    const Toggle = ()=>{
        setFlag(!flag);
    }
 
  return {Toggle,flag};
}

export default UseToggle
