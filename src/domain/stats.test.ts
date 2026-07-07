import { describe, expect, it } from "vitest";
import type { Attempt, StudyFile } from "../app/types";
import { computeQuestionStats } from "./stats";

const file: StudyFile = {
  id: "file1",
  folderId: "folder1",
  name: "sample.md",
  content: "",
  importedAt: 1,
  questions: [{ id: "q1", index: 1, prompt: "p", rawAnswer: "1", answer: "1" }],
};

const attempts: readonly Attempt[] = [
  {
    id: "a1",
    fileId: "file1",
    round: 1,
    answers: { q1: "0" },
    results: { q1: false },
    score: 0,
    total: 1,
    startedAt: 1,
    finishedAt: 2,
    durationMs: 1,
  },
  {
    id: "a2",
    fileId: "file1",
    round: 2,
    answers: { q1: "1" },
    results: { q1: true },
    score: 1,
    total: 1,
    startedAt: 3,
    finishedAt: 4,
    durationMs: 1,
  },
];

describe("computeQuestionStats", () => {
  it("highlights questions at or above wrong-rate threshold", () => {
    const stats = computeQuestionStats([file], attempts, 0.5);

    expect(stats[0]).toMatchObject({
      attempts: 2,
      wrong: 1,
      wrongRate: 0.5,
      highlighted: true,
    });
  });
});
