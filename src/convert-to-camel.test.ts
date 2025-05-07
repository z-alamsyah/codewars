import { describe, expect, it } from "vitest";
import { toCamelCase } from "./convert-to-camel";

describe("Convert CamelCase Test", () => {
  it("should return in camelCase format", () => {
    const resp = toCamelCase("Its-Camel-Case");
    expect(resp).toEqual("ItsCamelCase");
  });
  it("should return in camelCase format", () => {
    const resp = toCamelCase("its-Camel_Case");
    expect(resp).toEqual("itsCamelCase");
  });
  it("should return in camelCase format", () => {
    const resp = toCamelCase("itsCamelCase");
    expect(resp).toEqual("itsCamelCase");
  });
});
