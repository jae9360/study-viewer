import { describe, expect, it } from "vitest";
import type { AnswerOverride, Question } from "../app/types";
import { buildOverrideMap, effectiveAnswer } from "./answerOverride";

const question: Question = {
  id: "q1",
  index: 1,
  prompt: "문제",
  rawAnswer: "`원문`",
  answer: "원문",
};

describe("answerOverride", () => {
  it("builds a per-file answer override map", () => {
    const overrides: readonly AnswerOverride[] = [
      { fileId: "file1", questionId: "q1", answer: "로컬", updatedAt: 1 },
      { fileId: "file2", questionId: "q1", answer: "다른 파일", updatedAt: 2 },
    ];

    expect(buildOverrideMap(overrides, "file1")).toEqual(
      new Map([["q1", "로컬"]]),
    );
  });

  it("prefers a local override over the parsed answer", () => {
    expect(effectiveAnswer(question, new Map([["q1", "수정본"]]))).toBe(
      "수정본",
    );
    expect(effectiveAnswer(question, new Map())).toBe("원문");
  });
});
