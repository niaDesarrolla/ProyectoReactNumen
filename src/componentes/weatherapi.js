import React, { useState, useEffect } from 'react';
import CardApi from './cardapi';
import Barrabuscar from './buscar.js';

const WeatherApp = () => {

  const apiKey = 'f70f771f8fd64f27822214051231305';
  const urlWeather = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;
  const urlCity = '&aqi=no';
  
  const [cityData, setCityData] = useState(null); // almacena datos de la ciudad
  const [loading, setLoading] = useState(false); //  indica si se esta cargandando la informacion
  const [show, setShow] = useState(false); // controla la la visivilidad de las tarjetas del clima 
  
  const getLocation = async (loc) => { // Función para obtener la ubicación y los datos meteorológicos
    setLoading(true); //// Se establece el estado de carga a true
    const apiUrl = urlWeather + loc + urlCity; // Se construye la URL de la API
    try {
      const response = await fetch(apiUrl); // Se realiza la petición a la API
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
      const weatherData = await response.json();  // Se obtiene la respuesta en formato JSON
      console.log(weatherData);
      const cityData = {  // Se extraen los datos relevantes de la respuesta
        name: weatherData.location.name,
        country: weatherData.location.country,
        region: weatherData.location.region,
        temp_c: weatherData.current.temp_c,
        humidity: weatherData.current.humidity,
        condition: weatherData.current.condition.text,
        precip_mm: weatherData.current.precip_mm,
        feelslike_c:  weatherData.current.feelslike_c,
        icon: weatherData.current.condition.icon,
        localtime: weatherData.location.localtime,
      };
      setCityData(cityData); // Se actualiza el estado con los datos de la ciudad
      setLoading(false); // Se establece el estado de carga a false
      setShow(true); // Se muestra la información en la interfaz
    } catch (error) {
      console.log(error);
      setLoading(false);
      setShow(false);
    }
  };
  useEffect(() => {
    if (cityData !== null) {// Cuando cityData cambia y no es null
    getLocation(''); //Se llama a la función getLocation para obtener los datos de la ubicación inicial
    }
  }, []);

    
  return (
    <div>
       <Barrabuscar newLocation={getLocation}/> 
      
      {show && <CardApi cityData={cityData} loadingData={loading} 
showData={show} />}
    </div>
  );
};
export default WeatherApp;


