import React from "react";
import { render } from "@testing-library/react-native";
import WeatherDetailsCard from "../WeatherDetailsCard";
import { Weather } from "../../types";

jest.mock("../../helpers", () => ({
  convertTime: jest.fn().mockReturnValue("10:00"),
  temperatureToCelcius: jest.fn().mockReturnValue(25),
}));

const mockWeather: Weather = {
  weather: [
    {
      id: 501,
      main: "Rain",
      description: "moderate rain",
      icon: "10d",
    },
  ],
  main: {
    temp: 298.48,
    feels_like: 298.74,
    temp_min: 297.56,
    temp_max: 300.05,
    pressure: 1015,
    humidity: 64,
  },
  visibility: 10000,
  wind: {
    speed: 0.62,
  },

  clouds: {
    all: 100,
  },
  sys: {
    sunrise: 1661834187,
    sunset: 1661882248,
  },
};

describe("WeatherDetailsCard", () => {
  test("renders weather details ", () => {
    const { getByText } = render(<WeatherDetailsCard weather={mockWeather} />);

    const feelsLike = getByText("Feels like");
    const humidity = getByText("Humidity");
    const visibility = getByText("Visibility");
    const sunset = getByText("Sunset");
    const cloudiness = getByText("Cloudiness");
    const pressure = getByText("Pressure");
    const windSpeed = getByText("Wind Speed");
    const sunrise = getByText("Sunrise");

    expect(feelsLike).toBeTruthy();
    expect(humidity).toBeTruthy();
    expect(visibility).toBeTruthy();
    expect(sunset).toBeTruthy();
    expect(cloudiness).toBeTruthy();
    expect(pressure).toBeTruthy();
    expect(windSpeed).toBeTruthy();
    expect(sunrise).toBeTruthy();
  });
});
