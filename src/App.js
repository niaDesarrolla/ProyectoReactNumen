import React from 'react';
import './App.css';
import Cabecera from './componentes/Cabecera';
import WeatherApp from './componentes/weatherapi';
import Tarjeta from './componentes/tarjetas';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Cabecera />
        
          <WeatherApp />
       

          <Tarjeta />
       

      </header>
    </div>
  );
}

export default App;
