import { describe, expect, it } from "vitest";
import { cleanAnswer } from "./answerText";

describe("cleanAnswer", () => {
  it("removes markdown wrappers that surround the whole answer", () => {
    expect(cleanAnswer("`106.00`")).toBe("106.00");
    expect(cleanAnswer("**심볼릭링크**")).toBe("심볼릭링크");
    expect(cleanAnswer("_운영_")).toBe("운영");
  });
});
