import {useState} from 'react'
import React from 'react'

const Counter = () => {
    
    const [number, setNumber] = useState(0);

    const sumar = () => {
        setNumber (number + 1);
    }

    const restar = () => {
        setNumber (number - 1);
    }
        

  return (
    <div>
        <button onClick= {restar}> Restar </button>
        <h1>{number}</h1>
        <button onClick= {sumar}> Sumar </button>
        <hr/>
    </div>
  )
}

export default Counter;