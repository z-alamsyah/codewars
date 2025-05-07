import { describe, expect, it } from "vitest";
import { whoLikes } from "./who-likes";

describe("Who Likes This Test", () => {
  it("should return no one likes", () => {
    const resp = whoLikes([]);
    expect(resp).toEqual("no one likes this");
  });
  it("should return one person like", () => {
    const resp = whoLikes(["Peter"]);
    expect(resp).toEqual("Peter likes this");
  });

  it("should return two persons likes", () => {
    const resp = whoLikes(["Peter", "Jacob"]);
    expect(resp).toEqual("Peter and Jacob likes this");
  });

  it("should return 3 persons likes", () => {
    const resp = whoLikes(["Peter", "Jacob", "Alex"]);
    expect(resp).toEqual("Peter, Jacob and Alex likes this");
  });

  it("should return 4 persons or more likes", () => {
    const resp = whoLikes(["Peter", "Jacob", "Alex", "Max"]);
    expect(resp).toEqual("Peter, Jacob and 2 others likes this");
  });
});
