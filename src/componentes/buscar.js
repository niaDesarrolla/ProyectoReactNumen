import React, { useState } from "react";
const Barrabuscar = ({ newLocation }) => {
  const [city, setCity] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ city });
    if (city === "" || !city) return;
    newLocation(city);
  };
  return (
    <div className="contenedor">
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Ingrese la Ciudad"
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" className="boton-buscar">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};
export default Barrabuscar;