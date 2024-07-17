import React from 'react'

const Item = ( {producto} ) => {
  return (
         <div key={producto.id}>
            <img src= {producto.image} alt={producto.title}/>
            <h2>{producto.title}</h2>
            <p>${producto.price}</p>
            <p>{producto.descripcion}</p>
        </div>
  )
}

export default Item;