import React, { useState, useEffect } from 'react';

import { getWeatherData } from './service';
import Weather from './components/Weather';
import Descriptions from './components/Descriptions';
import DynamicBackround from './components/DynamicBackround';
import { BiSearchAlt } from 'react-icons/bi';

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('London');
  const [units, setUnits] = useState('metric'); // metric (°C) - imperial (°F)

  useEffect(() => {
    const weatherData = async () => {
      const data = await getWeatherData(city, units);
      setWeather(data);
    };

    weatherData();
  }, [city, units]);

  const handleCityEnter = (e) => {
    if (e.key === 'Enter') {
      setCity(e.currentTarget.value);
      e.currentTarget.value = '';
    }
  };

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === 'C';
    button.innerText = isCelsius ? '°F' : '°C';
    setUnits(isCelsius ? 'metric' : 'imperial');
  };

  return (
    <DynamicBackround weather={weather}>
      <div className='flex justify-center items-center h-screen'>
        <div className='p-5'>
          <div className='flex items-center gap-5 bg-white/25 backdrop-blur-sm shadow-2xl rounded-xl px-8 py-3 mb-8'>
            <div className='relative flex-1'>
              <input
                type='search'
                onKeyDown={handleCityEnter}
                placeholder='Enter the city...'
                className='w-full h-10 bg-transparent placeholder:text-black focus:outline-none px-10'/>
              <span className='absolute inset-y-0 left-3 flex items-center'>
                <BiSearchAlt />
              </span>
            </div>
            <button
              onClick={(e) => handleUnitsClick(e)}
              className='font-bold text-xl bg-white/40 rounded-md px-3'>°F</button>
          </div>
          <div className='grid xl:grid-cols-2 grid-cols-1 gap-4'>
            <Weather weather={weather} units={units} />
            <Descriptions weather={weather} units={units} />
          </div>
        </div>
      </div>
    </DynamicBackround>
  );
}
