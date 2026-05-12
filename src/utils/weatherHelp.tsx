import { Sun, Cloud, CloudFog, CloudDrizzle, CloudRainWind, Snowflake, CloudLightning, CloudSun } from "lucide-react";



export default function getWeatherName(code: number) {
  switch (code) {
    case 0:
      return <Sun className="sunny"/>;

    case 1:
    case 2:
    case 3:
      return <Cloud className="sunny"/>;

    case 45:
    case 48:
      return <CloudFog className="sunny"/>;

    case 51:
    case 53:
    case 55:
      return <CloudDrizzle className="sunny"/>;

    case 61:
    case 63:
    case 65:
      return <CloudRainWind className="sunny"/>;

    case 71:
    case 73:
    case 75:
      return <Snowflake className="sunny"/>;

    case 95:
      return <CloudLightning className="sunny"/>;

    default:
      return <CloudSun className="sunny"/>;
  }
}

