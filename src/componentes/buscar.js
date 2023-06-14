import React, { useState } from "react";
import '../hojas-estilos/CardApi.css';
const Barrabuscar = ({ newLocation }) => {
  const [city, setCity] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ city });
    if (city === "" || !city) return;
    newLocation(city);
  };
  return (
    <div className="contenedor-barrabuscar " ID="pronosticoclima">
      <form onSubmit={onSubmit}>
                <div className="barra input-group mb-3 mx-auto">
                    <input  type="text" className="form-control" placeholder="Ciudad" onChange={(e) =>setCity(e.target.value)}/>
                    <button className="btn bg-primary barra-input-group-text" type="submit">Buscar</button>
                </div>
            </form>
        </div>
  );
};
export default Barrabuscar;

// comentoo//