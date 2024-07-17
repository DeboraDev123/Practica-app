import React from 'react'
import Data from './Data/Productos.json';


const pedirProductos = () => {
    return new Promise ((resolve,reject) => {
        resolve(Data)
    })
  }
   

export default pedirProductos;
