import { fireEvent, render } from "@testing-library/react-native";
import SaveButton from "../SaveButton";

const mockedFunction = jest.fn();

describe("SaveButton,", () => {
  test("renders correctly", () => {
    const { getByTestId, getByText } = render(
      <SaveButton onPress={mockedFunction} isSaved={true} />
    );
    const button = getByTestId("SaveButton");
    expect(button).toBeTruthy();
  });

  test("react on press", async () => {
    const { getByTestId } = render(
      <SaveButton onPress={mockedFunction} isSaved={true} />
    );
    const button = getByTestId("SaveButton");
    fireEvent.press(button);
    expect(mockedFunction).toHaveBeenCalledWith();
  });
});
