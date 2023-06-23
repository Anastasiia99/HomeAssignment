import { render, waitFor } from "@testing-library/react-native";
import { AppStackParamList, Weather } from "../../types";
import WeatherDetailsScreen from "../WeatherDetailsScreen";
import { StackScreenProps } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}));

jest.mock("@react-navigation/native");

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockWeather),
  })
) as jest.Mock;

const setOptionsMock = jest.fn();

const props = {
  route: {
    params: {
      coordinates: { lat: 10, lon: 45 },
      city: "London",
    },
  },
  navigation: {
    setOptions: setOptionsMock,
  },
} as unknown as StackScreenProps<AppStackParamList, "WeatherDetails">;

describe("WeatherDetailsScreen,", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders correctly", async () => {
    const { getByTestId } = render(<WeatherDetailsScreen {...props} />);

    await waitFor(() => expect(fetch).toHaveBeenCalled());
    expect(AsyncStorage.getItem).toHaveBeenCalled();
    expect(setOptionsMock).toHaveBeenCalled();

    const mainCard = getByTestId("WeatherDetailsCard");
    const details = getByTestId("WeatherCard");
    expect(mainCard).toBeTruthy();
    expect(details).toBeTruthy();
  });

  test("render error text on fetch error", async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce("Error");
    const { queryByTestId, getByText } = render(
      <WeatherDetailsScreen {...props} />
    );
    await waitFor(() => {
      const mainCard = queryByTestId("WeatherDetailsCard");
      const details = queryByTestId("WeatherCard");
      const errorText = getByText("Unable to get wether details");
      expect(errorText).toBeTruthy();
      expect(mainCard).toBeNull();
      expect(details).toBeNull();
    });
  });
});
