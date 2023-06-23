import React from "react";
import { render } from "@testing-library/react-native";
import WeatherCard from "../WeatherCard";
import { Weather } from "../../types";

jest.mock("../../helpers", () => ({
  temperatureToCelcius: jest.fn().mockReturnValue(25),
}));

const weatherData = {
  main: {
    temp: 25,
    temp_min: 20,
    temp_max: 30,
  },
  weather: [
    {
      description: "Sunny",
      icon: "01d",
    },
  ],
} as Weather;

describe("WeatherCard", () => {
  test("renders correct", () => {
    const { getByText, getByTestId } = render(
      <WeatherCard weather={weatherData} city="London" />
    );

    const cityText = getByText("London");
    const temperature = getByText("25°C");
    const description = getByText("Sunny");
    const tempRange = getByText("L:25°  H:25°");
    const image = getByTestId("WeatherImage");

    expect(cityText).toBeTruthy();
    expect(temperature).toBeTruthy();
    expect(description).toBeTruthy();
    expect(tempRange).toBeTruthy();
    expect(image).toBeTruthy();
  });
});
