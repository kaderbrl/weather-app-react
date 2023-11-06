import { CgCompress } from 'react-icons/cg';
import {
  BsArrowDownCircle,
  BsArrowUpCircle,
  BsEmojiSmile,
  BsDropletHalf,
  BsWind,
} from 'react-icons/bs';

export default function Descriptions({ weather, units }) {
  const isMetric = units === 'metric';
  const tempUnit = isMetric ? '°C' : '°F';
  const windUnit = isMetric ? 'm/s' : 'm/h';

  const descriptionData = [
    {
      id: 1,
      data: weather.temp_min.toFixed(),
      title: 'min',
      unit: tempUnit,
      icon: <BsArrowDownCircle />,
    },
    {
      id: 2,
      data: weather.temp_max.toFixed(),
      title: 'max',
      unit: tempUnit,
      icon: <BsArrowUpCircle />,
    },
    {
      id: 3,
      data: weather.feels_like.toFixed(),
      title: 'feels like',
      unit: tempUnit,
      icon: <BsEmojiSmile />,
    },
    {
      id: 4,
      data: weather.pressure,
      title: 'pressure',
      unit: 'hPa',
      icon: <CgCompress />,
    },
    {
      id: 5,
      data: weather.humidity,
      title: 'humidity',
      unit: '%',
      icon: <BsDropletHalf />,
    },
    {
      id: 6,
      data: weather.speed.toFixed(),
      title: 'wind speed',
      unit: windUnit,
      icon: <BsWind />,
    },
  ];

  return (
    <div className='bg-white/25 backdrop-blur-sm shadow-2xl rounded-xl py-8 px-10 grid sm:grid-cols-3 grid-cols-2 md:gap-8 gap-4'>
      {descriptionData.map((item) => (
        <div
          key={item.id}
          className='flex flex-col justify-center items-center gap-1'
        >
          <div className='inline-flex justify-center items-center gap-1 bg-white/40 w-full rounded-md px-2 py-1'>
            {item.icon}
            <small className='capitalize'>{item.title}</small>
          </div>
          <div className='font-bold text-xl'>
            {item.data} {item.unit}
          </div>
        </div>
      ))}
    </div>
  );
}
