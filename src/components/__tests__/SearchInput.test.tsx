import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SearchInput from "../SearchInput";

const onSearchMock = jest.fn();

describe("SearchInput", () => {
  test("calls onSearch function when text changes", () => {
    const { getByTestId, queryByText } = render(
      <SearchInput onSearch={onSearchMock} searchText="" isError={false} />
    );
    const searchInput = getByTestId("SearchInput");
    fireEvent.changeText(searchInput, "London");
    expect(onSearchMock).toHaveBeenCalled();
    const errorMessage = queryByText("Unable to find the city");
    expect(errorMessage).toBeNull();
  });

  test("renders error message when isError prop is true", () => {
    const { getByText } = render(
      <SearchInput onSearch={onSearchMock} searchText="" isError={true} />
    );

    const errorMessage = getByText("Unable to find the city");
    expect(errorMessage).toBeTruthy();
  });
});
