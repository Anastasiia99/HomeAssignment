import { render } from "@testing-library/react-native";
import { City } from "../../types";
import CityList from "../CityList";

jest.mock("@react-navigation/native");

const mockCities: City[] = [
  { name: "City1", lat: 1, lon: 2, country: "Country1" },
  { name: "City2", lat: 1, lon: 2, country: "Country2" },
  { name: "City3", lat: 1, lon: 2, country: "Country3" },
];

describe("CityList", () => {
  test("renders correctly", () => {
    const { getByText } = render(<CityList cities={mockCities} />);

    mockCities.forEach((city) => {
      const cityName = getByText(city.name);
      const cityCountry = getByText(city.name);
      expect(cityName).toBeTruthy();
      expect(cityCountry).toBeTruthy();
    });
  });

  test("renders the correct number of cities", () => {
    const { getAllByTestId } = render(<CityList cities={mockCities} />);
    const cityItems = getAllByTestId("CityItem");
    expect(cityItems.length).toBe(mockCities.length);
  });
});
