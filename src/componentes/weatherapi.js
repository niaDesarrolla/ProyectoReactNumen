import React, { useState, useEffect } from 'react';
import CardApi from './cardapi';
import Barrabuscar from './buscar.js';
import axios from 'axios';

const WeatherApp = () => {

  const apiKey = 'f70f771f8fd64f27822214051231305';
  const urlWeather = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;
  const urlCity = '&aqi=no';
  
  const [cityData, setCityData] = useState(null); // almacena datos de la ciudad
  const [loading, setLoading] = useState(false); //  indica si se esta cargandando la informacion
  const [show, setShow] = useState(false); // controla la la visivilidad de las tarjetas del clima 
  
  const getLocation = async (loc) => { // Función para obtener la ubicación y los datos meteorológicos
    setLoading(true); //// Se establece el estado de carga a true
    const apiUrl = urlWeather + loc + urlCity; // Se construye la URL de la API
    try {
      const response = await axios(apiUrl); // Se realiza la petición a la API
      console.log(response);
      if (response.status !== 200) {
        throw new Error('Error en la respuesta de la API');
      }
      const weatherData = await response.data;  // Se obtiene la respuesta de la base de datos

      const cityData = {  // Se extraen los datos relevantes de la respuesta
        name: weatherData.location.name,
        country: weatherData.location.country,
        region: weatherData.location.region,
        temp_c: weatherData.current.temp_c,
        humidity: weatherData.current.humidity,
        condition: weatherData.current.condition.text,
        precip_mm: weatherData.current.precip_mm,
        feelslike_c: weatherData.current.feelslike_c,
        icon: weatherData.current.condition.icon,
        cloud: weatherData.current.cloud,

      };

      console.log(weatherData);
      setCityData(cityData);
      setLoading(false);
      setShow(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setShow(false);

    }
  };

    //LLAMADA A BASE DE DATOS DE JSON-SERVER 
    const updateCityData = async () => {
      try {
        const resCityData = await axios('http://localhost:3000/data');
        const newCityData = resCityData.data;
        setCityData(newCityData);
        setLoading(false);
        setShow(true);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setShow(false);
      }
    };
  
   useEffect(() => {
    updateCityData();
  }, []);



    
  return (
    <div>
       <Barrabuscar newLocation={getLocation}/> 
      
      {show && <CardApi cityData={cityData} loadingData={loading} showData={show} />}
    </div>
  );

};
export default WeatherApp;


