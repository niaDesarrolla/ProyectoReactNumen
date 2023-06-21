import React from 'react';
import '../hojas-estilos/CardApi.css';
import Spinner from './spinner';

function CardApi({ cityData, loadingData, showData, }) {

  if (loadingData) {
    return <Spinner />;
  }

   const { country, region, condition, humidity, cloud, precip_mm, temp_c, feelslike_c, icon } = cityData;

  return (
    <div className="mt-5" >
      {showData === true && (
        <div className="containerapi">
          <div className="card mb-3 mx-auto text-light">
            <div className="row g-0">
              <div className="col-md-7">
              <p className='card-titleapi'>{cityData.name}</p>
                <p className='card-dateapi'>{cityData.date} </p>
                <p className='card-tempapi'>{cityData.temp_c}°C</p>
                <p className='card-conditonapi'><img src={icon} alt="icon"/>{condition}</p> 
               
                <p className='contenedor-imagenapi'>
                  {cityData?.current?.condition?.text.icon}

                  <img

                    src={
                      cityData?.temp_c >= 25 || cityData?.cloud <= 30
                      ? './imagenes/soleado.png'
                      : cityData?.temp_c >= 15 ||
                        cityData?.temp_c <= 24 ||
                        cityData?.cloud >= 70
                        ? './imagenes/nublado.png'
                        : cityData?.temp_c >= 10 ||
                          cityData?.precip_mm >= 10
                          ? './imagenes/lluvioso.png'
                          : cityData?.temp_c <= 0 ||
                            cityData?.precip_mm >= 10
                            ? './imagenes/nieve.png'
                            : './imagenes/cielonubes.png'}


                    className="img-fluid  float-start" style={{ borderRadius: '10px 0px 0px 10px',  height: '100%'}}
                     alt="Weather Icon"
                    />
                   
                </p>

          </div>

              <div className="col-md-4">
                <div className="datoscardapi card-body text-start mt-2 text-dark">
                  <p><span className='fw-bold '>País:</span> {country}</p>
                  <p><span className='fw-bold'>Región:</span> {region}</p>
                  <p><span className='fw-bold'>Temperatura:</span> {temp_c}°C</p>
                  <p><span className='fw-bold'>Sensación Térmica:</span>{feelslike_c}°</p>
                  <p><span className='fw-bold'>Humedad: </span>{humidity}%</p>
                  <p><span className='fw-bold'>Nubosidad:</span> {cloud}</p>
                  <p><span className='fw-bold'>Precipitación:</span> {precip_mm}</p>
                </div>
              </div>
                                   
                  </div>
          </div>
        </div>

        )
                    }
      {!showData && <p className='text-light'>sin datos</p>}

    </div>
  );
                  }
   
    export default CardApi;
    