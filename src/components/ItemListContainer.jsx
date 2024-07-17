import React, { useEffect, useState } from 'react'
import Data from './Data/Productos.json';
import pedirProductos from './pedirProductos';
import ItemList from './ItemList';

function ItemListContainer() {
  
  const [productos, setProductos] = useState([]);

  
  useEffect (() => {
    pedirProductos()
      .then((res) => {
         setProductos(res)
        })
  }, []);

  return (
        <div>
           <ItemList productos = {productos}/>
        </div>
  )
}

export default ItemListContainer;