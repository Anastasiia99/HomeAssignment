import { render } from "@testing-library/react-native";
import Layout from "../Layout";
import { Text } from "react-native";

describe("Layout", () => {
  test("renders correctly", () => {
    const { getByText } = render(
      <Layout>
        <Text>Hello</Text>
      </Layout>
    );
    const children = getByText("Hello");
    expect(children).toBeTruthy();
  });
});
