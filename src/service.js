const api = {
  key: "f443af2f7b7dbaba0330dd8c81999cd0",
  base: "https://api.openweathermap.org/data/2.5/",
};

const createIconURL = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getWeatherData = async (city, units = "metric") => {
  const URL = `${api.base}weather?q=${city}&appid=${api.key}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    name,
    sys: { country },
    main: { temp, temp_min, temp_max, feels_like, pressure, humidity },
    wind: { speed },
  } = data;

  const { description, icon } = weather[0];

  return {
    name,
    country,
    description,
    iconURL: createIconURL(icon),
    temp,
    temp_min,
    temp_max,
    feels_like,
    pressure,
    humidity,
    speed,
  };
};

export { getWeatherData };
