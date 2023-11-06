import { useEffect, useState } from 'react';

import CloudsBg from '../assets/clouds.jpg';
import ClearSkyBg from '../assets/clear-sky.jpg';
import RainBg from '../assets/rain.jpg';
import SnowBg from '../assets/snow.jpg';
import ThunderstormBg from '../assets/thunderstorm.jpg';
import MistBg from '../assets/mist.jpg';

const backgroundImages = {
  '01': ClearSkyBg,
  '02': CloudsBg,
  '03': CloudsBg,
  '04': CloudsBg,
  '09': RainBg,
  '10': RainBg,
  '11': ThunderstormBg,
  '13': SnowBg,
  '50': MistBg,
};

export default function DynamicBackround({ weather, children }) {
  const [background, setBackground] = useState(ClearSkyBg);

  useEffect(() => {
    if (weather) {
      const weatherIcon = weather.iconURL;
      for (const key in backgroundImages) {
        if (weatherIcon.includes(key)) {
          setBackground(`${backgroundImages[key]}`);
          break;
        }
      }
    }
  }, [weather]);

  return (
    <>
      {weather && (
        <div
          style={{ backgroundImage: `url(${background})`}}
          className='w-full h-screen bg-center bg-cover'>
          {children}
        </div>
      )}
    </>
  );
}
