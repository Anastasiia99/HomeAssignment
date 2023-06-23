export type City = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
};

export type Weather = {
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
  };

  clouds: {
    all: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
};

export type AppStackParamList = {
  Home: undefined;
  WeatherDetails: {
    city: string;
    coordinates: {
      lat: number;
      lon: number;
    };
  };
};
