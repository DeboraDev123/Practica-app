import React from 'react'
import Item from './Item';

const ItemList = ( {productos} ) => {
  return (
    <div>
       <h2>Productos</h2>
             {
                productos.length > 0 && 
               
                productos.map((producto) => {
                  return(
                       <Item producto = {producto}/>
                      )
                  })    
            }

    </div>
  )
}

export default ItemList;