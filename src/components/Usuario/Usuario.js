import "./Usuario.css";

export const Usuario = ({Nombre,Edad,Localidad} ) => {

    
    return (
         <div><h1> Nombre: {Nombre}</h1> 
              <p>Edad: {Edad}</p>
              <p>Localidad: {Localidad}</p> 
              <hr/>
        </div>
        )
}


