import type { AnswerOverride } from "./types";

export function upsertAnswerOverride(
  overrides: readonly AnswerOverride[],
  override: AnswerOverride,
): readonly AnswerOverride[] {
  return [
    ...overrides.filter(
      (item) =>
        item.fileId !== override.fileId ||
        item.questionId !== override.questionId,
    ),
    override,
  ];
}
