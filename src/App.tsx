import { useEffect, useState } from "react"
import Navbar from "./components/navbar"
import WeatherBox, { type WeatherData } from "./components/weatherbox"
import { getWeather } from "./services/weather"
import { getCoordinates } from "./services/geocoding"



function App() {

  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [city, setCity] = useState("Tokyo")
  const [searchInput, setSearchInput] = useState("Tokyo");


  async function searchWeather() {

    try {

      setCity(searchInput);
      
      const location = await getCoordinates(searchInput);

      const data = await getWeather(
        location.latitude,
        location.longitude
      )

      setWeather(data);
    }catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
      async function load() {
        try {
          const data = await getWeather(35.6895, 139.6917)
          setWeather(data)
        }catch (err) {
          console.error(err)
        }
      }

      load();
  }, [])  



  return (
    <div>
      <Navbar
         searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchWeather={searchWeather}
      />
      <div className="main">
        <WeatherBox weather={weather} city={city}/>
      </div>
      
    </div>
  )
}

export default App
