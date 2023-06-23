import { convertTime, temperatureToCelcius } from "./helpers";

describe("helpers functions,", () => {
  test("temperatureToCelcius", () => {
    expect(temperatureToCelcius(298)).toBe("25");
  });

  test("convertTime", async () => {
    expect(convertTime(1661834187)).toBe("6:36");
  });
});
