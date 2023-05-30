import React from 'react';
import './App.css';
import Cabecera from './componentes/Cabecera';
import WeatherApp from './componentes/watherapi';
import Tarjeta from './componentes/tarjetas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <Cabecera/>

       

       <WeatherApp/>


       <Tarjeta/>
       
      </header>
    </div>
  );
}

export default App;
