import { Droplet, TrendingDown, TrendingUp, Wind } from "lucide-react";
import getWeatherName from "../utils/weatherHelpers";
import getWeatherIcon from "../utils/weatherHelp"
import { capitalizeWords } from "../utils/stringHelper";

export type WeatherData = {
  current: {
    temperature_2m: number;
    weather_code: number;
    wind_speed_10m: number;
  };

  daily: {
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: number[];
  };
};

type Props = {
  weather : WeatherData | null;
  city : string;
}

export default function WeatherBox({ weather, city }: Props) {

  if (!weather) {
    return <div className="weatherbox">Loading...</div>
  }

  const current = weather.current;
  const daily = weather.daily;

  return (
    <div className="weatherbox">

      <div className="country">{capitalizeWords(city)}</div>

      <div className="weathericon">
        {getWeatherIcon(current.weather_code)}
      </div>

      <div className="weather">
        {getWeatherName(current.weather_code)}
      </div>

      <div className="temp">

        <div className="high centrebox">
          <TrendingUp/>
          {daily.temperature_2m_max[0]}°
        </div>

        <div className="currenttemp centrebox">
          {current.temperature_2m}°C
        </div>

        <div className="low centrebox">
          <TrendingDown/>
          {daily.temperature_2m_min[0]}°
        </div>
        
      </div>

      <div className="extrainfo">

        <div className="precipitation centrebox">
          <Droplet/>
          {daily.precipitation_probability_max[0]}%
        </div>

        <div className="wind centrebox">
          <Wind/>
          {current.wind_speed_10m} km/h
        </div>
      </div>

    </div>
    
    )
}
