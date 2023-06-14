import React from 'react';
import './App.css';
import Cabecera from './componentes/Cabecera';
import WeatherApp from './componentes/weatherapi';
import Footer from './componentes/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Acercade from './componentes/Testimonios';
import Formulario from './componentes/Formulario';
import Micarrusel from './componentes/micarrusel';
import MiModal from './componentes/modal';
import Infotarjeta from './componentes/InfoTarjetas';



function App() {
  return (
    <div className="App">
      <header className="App-header">
    
         <MiModal/> 
       <Cabecera />
      <Micarrusel/>  
      <WeatherApp />
        
     <Infotarjeta/>
    

    <Acercade/>

    <Formulario/>

    <Footer/>
  
      </header>
  
    
  </div>

  );
}
  

export default App;
