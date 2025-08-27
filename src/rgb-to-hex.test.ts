import { describe, expect, it } from "vitest";
import { rgb } from "./rgb-to-hex";

describe("Convert To Hex Test", () => {
  it("Should return FFFFFF", () => {
    const resp = rgb(255, 255, 255);
    expect(resp).toEqual("FFFFFF");
  });

  it("Should return FFFFFF", () => {
    const resp = rgb(300, 255, 255);
    expect(resp).toEqual("FFFFFF");
  });

  it("Should return 000000", () => {
    const resp = rgb(0, 0, 0);
    expect(resp).toEqual("000000");
  });

  it("Should return 000000", () => {
    const resp = rgb(0, -3, 0);
    expect(resp).toEqual("000000");
  });
});
