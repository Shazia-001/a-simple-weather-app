
export default function getWeatherName(code: number) {
  switch (code) {
    case 0:
      return "Clear Sky";

    case 1:
    case 2:
    case 3:
      return "Cloudy";

    case 45:
    case 48:
      return "Foggy";

    case 51:
    case 53:
    case 55:
      return "Drizzle";

    case 61:
    case 63:
    case 65:
      return "Rainy";

    case 71:
    case 73:
    case 75:
      return "Snow";

    case 95:
      return "Thunderstorm";

    default:
      return "Unknown";
  }
}

