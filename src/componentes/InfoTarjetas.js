import React from 'react';
import Tarjeta from "./tarjetas";
import '../hojas-estilos/tarjetas.css';

function Infotarjeta(){
  return(

    <div className= 'container__ficha'>
    <h1 className='titulo-tarjeta'>INFORMACION UTIL</h1>
    <Tarjeta
    imagen= 'rayosuv.jpg'
    altImagen= 'foto de rayos uv'
    titulo='Indice Solar UV'
    resumen='La radiación solar ultravioleta (UV) que llega a la superficie de nuestro planeta comprende el rango de longitudes de onda UVB (280-320 nm) y UVA (320-400 nm). el índice Solar UV (ISUV) se calcula multiplicando el valor de la radiación solar UV eritémica (W/m2) por un factor de 40 m2/W, transformándolo en un valor numérico y adimensional, asociado a un nivel de “riesgo”, que se considera “Extremo” a partir de ISUV=11.' />
    <Tarjeta
      imagen= 'invierno.jpg'
      altImagen= 'fotos de invierno'
      titulo='Bajas Temperaturas'
      resumen='Recomendaciones: Evita la entrada de aire extremadamente frío en los pulmones. Protéjase rostro y cabeza. Si tienes que ir a la montaña, elije vestimenta que proteja del viento y resista el agua, evita prendas que puedan afectar a la circulación, no camines sobre hielo, procura no mojarse y elije alimentos ricos en hidratos de carbono.' />
    <Tarjeta
    imagen= 'precipitacion.jpg'
    altImagen= 'foto de precipitacion'
    titulo= 'Precipitación'
    resumen= 'La precipitación varía 50 mm entre el mes más seco y el mes más húmedo. La variación en las temperaturas durante todo el año es 13.7 °C.El valor más bajo de la humedad relativa se mide en diciembre (64.36 %). La humedad relativa es más alta en junio (78.77 %). El mes con la mayor cantidad de días lluviosos es octubre con 10.03 días. El mes con la menor cantidad de días lluviosos es enero con 6.90 días.'/>
  </div>
  )
}

export default Infotarjeta;