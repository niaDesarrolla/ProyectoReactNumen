import React from 'react';
import '../hojas-estilos/CardApi.css';
import Spinner from './spinner';
//import cielonubes from '../img/cielonubes.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function CardApi({ cityData, loadingData, showData, }) {


  if (loadingData) {
    return <Spinner />;
  }


   const { country, region, condition, humidity, cloud, precip_mm, temp_c, feelslike_c, icon } = cityData;

  return (
    <div className="mt-5">
      {showData === true && (
        <div className="container">
          <div className="card mb-3 mx-auto bg-dark text-light">
            <div className="row g-0">
              <div className="col-md-4">
                <h3 className='card-title'>{cityData.name}</h3>
                <h2 className='card-temp'>{cityData.temp_c}°C</h2>
               
                <p className='card-icon'>
                  {cityData?.current?.condition?.text.icon}
                  <img

                    src={
                      cityData?.temp_c.icon >= 25 && cityData?.cloud === 'baja'
                      ? './imagenes/soleado.png'
                      : cityData?.temp_c.icon >= 15 ||
                        cityData?.temp_c.icon <= 24 ||
                        cityData?.cloud.icon === 'alta'
                        ? './imagenes/nublado.png'
                        : cityData?.temp_c.icon >= 10 ||
                          cityData?.precip_mm.icon >= 10
                          ? './imagenes/lluvioso.png'
                          : cityData?.temp_c.icon <= 0 ||
                            cityData?.precip_mm.icon >= 10
                            ? './imagenes/nieve.png'
                            : './imagenes/cielonubes.png'}


                    alt="Weather Icon"
                    className="img-fluid rounded-start" /> </p>

          </div>

              <div className="col-md-8">
                <div className="card-body text-start mt-2">
                  <p>País: {country}</p>
                  <p>Región: {region}</p>
                  <p>Temperatura: {temp_c}°C</p>
                  <p>Sensación Térmica:{feelslike_c}°</p>
                  <p>Humedad: {humidity}%</p>
                  <p>Nubosidad: {cloud}</p>
                  <p>Precipitación: {precip_mm}</p>
                </div>
              </div>
             
              <hr/>  
 
                 <div className="row mt-4">
                     <div className="col">
                          <p>{cityData.localtime}h</p>
                          <p className="description"><img src={icon} alt="icon"/>{condition}</p>
                          <p className="temp">{temp_c}ºC</p>
                      </div>
                      <div className="col">
                          <p>{cityData.localtime}h</p>
                          <p className="description"><img src={icon} alt="icon"/>{condition}</p>
                          <p className="temp">{temp_c}ºC</p>
                      </div>
                      <div className="col">
                          <p>{cityData.localtime}h</p>
                          <p className="description"><img src={icon} alt="icon"/>{condition}</p>
                          <p className="temp">{temp_c}ºC</p>
                      </div>
                                         
                  </div>
          </div>
        </div>


    </div>
        )
                    }
      {!showData && <h2 className='text-light'>sin datos</h2>}


    </div>
  );
}
   
    export default CardApi;