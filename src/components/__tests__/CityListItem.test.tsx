import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { City } from "../../types";
import CityListItem from "../CityListItem";

const mockCity: City = { name: "City1", lat: 1, lon: 2, country: "Country1" };

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe("CityListItem,", () => {
  test("renders correctly", () => {
    const { getByText } = render(<CityListItem city={mockCity} />);
    const cityName = getByText(mockCity.name);
    const cityCountry = getByText(mockCity.name);
    expect(cityName).toBeTruthy();
    expect(cityCountry).toBeTruthy();
  });

  test("react on press", async () => {
    const { getByTestId } = render(<CityListItem city={mockCity} />);
    const cityItem = getByTestId("CityItem");
    fireEvent.press(cityItem);
    expect(mockedNavigate).toHaveBeenCalledWith("WeatherDetails", {
      city: mockCity.name,
      coordinates: {
        lat: mockCity.lat,
        lon: mockCity.lon,
      },
    });
  });
});
