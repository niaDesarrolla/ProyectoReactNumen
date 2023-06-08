import React from 'react';
import './App.css';
import Cabecera from './componentes/Cabecera';
import WeatherApp from './componentes/weatherapi';
import Tarjeta from './componentes/tarjetas';
import './componentes/micarrusel';
import './componentes/modal';


import Footer from './componentes/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Acercade from './componentes/Testimonios';
import Formulario from './componentes/Formulario';
import Micarrusel from './componentes/micarrusel';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cabecera />





    <div>
      <Micarrusel/>
    </div>


          <WeatherApp />
        <WeatherApp />

       
      <div className= 'container__ficha'>
      <h1>INFORMACION UTIL</h1>
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
       
    <Acercade/>

    <Formulario/>
    
 
    <Footer/>
   
   </header>

  </div>


  );
}
  

export default App;
