import { describe, expect, it } from "vitest";
import { applyQuestionOrder } from "./studyFileSelection";
import type { Attempt, StudyFile } from "./types";

describe("applyQuestionOrder", () => {
  it("returns the latest wrong questions in shuffled order for wrong-only mode", () => {
    const file: StudyFile = {
      id: "file-1",
      folderId: "folder-1",
      name: "sample.md",
      content: "",
      importedAt: 1,
      questions: [
        { id: "q1", index: 1, prompt: "첫째", rawAnswer: null, answer: "A" },
        { id: "q2", index: 2, prompt: "둘째", rawAnswer: null, answer: "B" },
        { id: "q3", index: 3, prompt: "셋째", rawAnswer: null, answer: "C" },
      ],
    };
    const latestAttempt: Attempt = {
      id: "attempt-1",
      fileId: "file-1",
      round: 1,
      answers: { q1: "A", q2: "wrong", q3: "wrong" },
      results: { q1: true, q2: false, q3: false },
      score: 1,
      total: 3,
      startedAt: 1,
      finishedAt: 2,
      durationMs: 1,
    };

    const ordered = applyQuestionOrder(file, "wrong-only", 0, latestAttempt);

    expect(ordered?.questions.map((question) => question.id)).toEqual([
      "q3",
      "q2",
    ]);
    expect(ordered?.questions.map((question) => question.index)).toEqual([
      1, 2,
    ]);
  });
});
