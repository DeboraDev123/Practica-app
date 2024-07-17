import React from 'react'
import {useState} from 'react'

const TextH2 = () => {

    const [text, setText] = useState("");
    
    const handleText = (e) => {
        setText(e.target.value)
    } 
    console.log("Hola Mundo!!")
    return (
        <div>
            <input type= "text" onChange= {handleText}/>
            <h1></h1>
        </div>
  )
}


export default TextH2;