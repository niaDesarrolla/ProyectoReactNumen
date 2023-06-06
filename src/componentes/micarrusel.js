import React from 'react';
import 'componentes./micarrusel.css';
import imagen1 from './img/1.png';
import imagen2 from './img/2.png';
import imagen3 from './img/3.jpg';


const imagenes = [
  imagen1,
  imagen2,
  imagen3,
];

const Micarrusel = () => {
  const [indiceImagen, setIndiceImagen] = React.useState(0);
  
  const siguienteImagen = () => {
    setIndiceImagen((prevIndice) => (prevIndice + 1) % imagenes.length);
  };
  
  const anteriorImagen = () => {
    setIndiceImagen((prevIndice) => (prevIndice - 1 + imagenes.length) % imagenes.length);
  };
  
  return (
    <div className="micarrusel">
      <img src={imagenes[indiceImagen]} alt={`Imagen ${indiceImagen + 1}`} />
      <button onClick={anteriorImagen}>Anterior</button>
      <button onClick={siguienteImagen}>Siguiente</button>
    </div>
  );
};

export default Micarrusel;

 
  
  

  

  