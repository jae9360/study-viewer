import type { Question } from "../app/types";
import type { AnswerOverrideMap } from "./answerOverride";
import { effectiveAnswer } from "./answerOverride";
import { checkCorrectness } from "./correctness";

export type ScoreResult = {
  readonly results: Readonly<Record<string, boolean>>;
  readonly score: number;
  readonly total: number;
};

export function gradeAnswers(
  questions: readonly Question[],
  answers: Readonly<Record<string, string>>,
  overrideMap: AnswerOverrideMap = new Map(),
): ScoreResult {
  const results: Record<string, boolean> = {};
  let score = 0;
  let total = 0;

  for (const question of questions) {
    const correctAnswer = effectiveAnswer(question, overrideMap);
    if (correctAnswer === null) continue;
    total += 1;
    const isCorrect = checkCorrectness(
      answers[question.id] ?? "",
      correctAnswer,
    );
    results[question.id] = isCorrect;
    if (isCorrect) score += 1;
  }

  return { results, score, total };
}
