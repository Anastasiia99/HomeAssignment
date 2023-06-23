import { act, fireEvent, render, waitFor } from "@testing-library/react-native";
import HomeScreen from "../HomeScreen";
import { City } from "../../types";

const mockCities: City[] = [
  { name: "City1", lat: 1, lon: 2, country: "Country1" },
  { name: "City2", lat: 1, lon: 2, country: "Country2" },
  { name: "City3", lat: 1, lon: 2, country: "Country3" },
];

jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
}));

jest.mock("@react-navigation/native");

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockCities),
  })
) as jest.Mock;

describe("HomeScreen,", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders correctly without prepopulated value", () => {
    const { queryByTestId } = render(<HomeScreen />);
    const input = queryByTestId("SearchInput");
    const item = queryByTestId("CityItem");
    expect(input).toBeTruthy();
    expect(item).toBeNull();
  });

  test("fetch items on input change", async () => {
    const { getByTestId, queryAllByTestId } = render(<HomeScreen />);
    const input = getByTestId("SearchInput");
    await act(async () => {
      fireEvent.changeText(input, "L");
      await waitFor(() => {
        expect(fetch).toBeCalled();
      });
    });
    const item = queryAllByTestId("CityItem");
    expect(item.length).toBe(mockCities.length);
  });
});
