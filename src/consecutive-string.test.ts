import { describe, expect, it } from "vitest";
import { longestConsec } from "./consecutive-string";

describe("Find Longest Consecutive String", () => {
  it("Should return folingtrashy", () => {
    const strArr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
    const result = longestConsec(strArr, 2);

    expect(result).toEqual("folingtrashy");
  });
});
