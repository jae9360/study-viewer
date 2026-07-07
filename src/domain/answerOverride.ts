import type { AnswerOverride, Question } from "../app/types";

export type AnswerOverrideMap = ReadonlyMap<string, string>;

export function buildOverrideMap(
  overrides: readonly AnswerOverride[],
  fileId: string,
): AnswerOverrideMap {
  const map = new Map<string, string>();
  for (const override of overrides) {
    if (override.fileId === fileId)
      map.set(override.questionId, override.answer);
  }
  return map;
}

export function effectiveAnswer(
  question: Question,
  overrideMap: AnswerOverrideMap = new Map(),
): string | null {
  return overrideMap.get(question.id) ?? question.answer;
}
