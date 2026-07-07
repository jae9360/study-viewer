import { describe, expect, it } from "vitest";
import type { Question } from "../app/types";
import { gradeAnswers } from "./scoring";

const questions: readonly Question[] = [
  { id: "q1", index: 1, prompt: "one", rawAnswer: "A", answer: "A" },
  { id: "q2", index: 2, prompt: "two", rawAnswer: "B", answer: "B" },
  { id: "q3", index: 3, prompt: "essay", rawAnswer: null, answer: null },
];

describe("gradeAnswers", () => {
  it("grades answer maps and skips no-answer questions", () => {
    expect(gradeAnswers(questions, { q1: "a", q2: "x" })).toEqual({
      results: { q1: true, q2: false },
      score: 1,
      total: 2,
    });
  });

  it("uses local answer overrides as grading criteria", () => {
    expect(
      gradeAnswers(
        questions,
        { q1: "local", q2: "B" },
        new Map([["q1", "local"]]),
      ),
    ).toEqual({
      results: { q1: true, q2: true },
      score: 2,
      total: 2,
    });
  });
});
