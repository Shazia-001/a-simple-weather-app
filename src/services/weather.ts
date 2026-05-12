
export async function getWeather(lat: number, lon: number) {

  const params = new URLSearchParams({
    latitude: lat.toString(),
    longitude: lon.toString(),

    current: [
      "temperature_2m",
      "weather_code",
      "wind_speed_10m"
    ].join(","),

    daily: [
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_probability_max"
    ].join(","),

    timezone: "auto"
  });

  const url = `https://api.open-meteo.com/v1/forecast?${params}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch weather");
  }

  return res.json();
}