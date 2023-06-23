import { render } from "@testing-library/react-native";
import ListItemSeparator from "../ListItemSeparator";

describe("ListItemSeparator", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(<ListItemSeparator />);
    const item = getByTestId("ListItemSeparator");
    expect(item).toBeTruthy();
  });
});
