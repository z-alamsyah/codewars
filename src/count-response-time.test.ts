import { describe, expect, it } from "vitest";
import countResponseTimeRegressions from "../src/count-response-time.js";

describe("Test Count Response Time Function", () => {
  it("Should return 2", () => {
    const result = countResponseTimeRegressions([100, 200, 150, 300]);
    expect(result).toEqual(2);
  });
});
