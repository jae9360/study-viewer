import { describe, expect, it } from "vitest";
import { checkCorrectness, normalizeAnswer } from "./correctness";

describe("normalizeAnswer", () => {
  it("normalizes whitespace, case, and edge punctuation", () => {
    expect(normalizeAnswer("  Seoul.  ")).toBe("seoul");
    expect(normalizeAnswer("정  답")).toBe("정 답");
  });
});

describe("checkCorrectness", () => {
  it("checks answers by normalized exact match", () => {
    expect(checkCorrectness(" 4 ", "4")).toBe(true);
    expect(checkCorrectness("3", "4")).toBe(false);
    expect(checkCorrectness("", "4")).toBe(false);
  });
});
