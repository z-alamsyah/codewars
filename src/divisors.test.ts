import { assert, describe, it } from "vitest";
import divisors from "./divisors";

describe("Sample tests", () => {
  it("integer = 15", () => assert.deepEqual(divisors(15), [3, 5]));
  it("integer = 12", () => assert.deepEqual(divisors(12), [2, 3, 4, 6]));
  it("integer = 13", () => assert.deepEqual(divisors(13), "13 is prime"));
});
