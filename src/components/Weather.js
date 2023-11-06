import { MdLocationOn } from 'react-icons/md';

export default function Weather({ weather, units }) {
  return (
    <div className='bg-white/25 backdrop-blur-sm shadow-2xl rounded-xl flex justify-between items-center gap-20 px-10 py-5'>
      <div className='text-center pb-5'>
        <img src={weather.iconURL} alt='weather-icon' loading='lazy' />
        <small className='capitalize'>{weather.description}</small>
      </div>
      <div className='flex flex-col gap-5'>
        <div className='flex justify-end items-baseline gap-1'>
          <h1 className='font-bold text-2xl after:content-[","]'>
            {weather.name}
          </h1>
          <small className='font-bold text-sm'>{weather.country}</small>
          <MdLocationOn />
        </div>
        <div className='text-end text-5xl'>
          {weather.temp.toFixed()} °{units === 'metric' ? 'C' : 'F'}
        </div>
      </div>
    </div>
  );
}
