import React from "react";
import { render } from "@testing-library/react-native";
import WeatherDetailsItem from "../WeatherDetailsItem";

describe("WeatherDetailsItem", () => {
  test("renders title and text correct", () => {
    const { getByText } = render(
      <WeatherDetailsItem title="Humidity" text={60} />
    );
    const title = getByText("Humidity");
    const text = getByText("60");
    expect(title).toBeTruthy();
    expect(text).toBeTruthy();
  });
});
