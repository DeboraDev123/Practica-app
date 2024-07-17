import React from 'react'
import {useState} from 'react'
import TextH2 from './TextH2';

const Text = () => {

    const [show, setShow] = useState(false);

    function handleShow () {
        setShow (!show)
        console.log(show)
    }

  return (
    <div>
       <button onClick= {handleShow}>{show === true ? "Ocultar" : "Mostrar"}</button> 
       {show && <TextH2/>}
    </div>
  )
}

export default Text;
