import type { Question } from "../app/types";
import type { AnswerOverrideMap } from "../domain/answerOverride";
import { effectiveAnswer } from "../domain/answerOverride";
import { checkCorrectness } from "../domain/correctness";
import type { ProgressQuestionOption } from "./ProgressControls";

export type ExamProgressResult = {
  readonly correctItems: readonly ProgressQuestionOption[];
  readonly failedItems: readonly ProgressQuestionOption[];
};

type AnswerResultInput = {
  readonly questions: readonly Question[];
  readonly answers: Readonly<Record<string, string>>;
  readonly overrideMap: AnswerOverrideMap;
  readonly savedQuestionIds: ReadonlySet<string>;
};

export function collectAnswerResults({
  questions,
  answers,
  overrideMap,
  savedQuestionIds,
}: AnswerResultInput): ExamProgressResult {
  const correctItems: ProgressQuestionOption[] = [];
  const failedItems: ProgressQuestionOption[] = [];
  questions.forEach((item, index) => {
    const answer = answers[item.id] ?? "";
    const correctAnswer = effectiveAnswer(item, overrideMap);
    if (
      correctAnswer === null ||
      !savedQuestionIds.has(item.id) ||
      answer.trim().length === 0
    )
      return;
    const isCorrect = checkCorrectness(answer, correctAnswer);
    const option = {
      index,
      label: `${isCorrect ? "정답문항" : "오답문항"} ${index + 1}. ${summarizePrompt(item.prompt)}`,
    };
    if (isCorrect) correctItems.push(option);
    else failedItems.push(option);
  });
  return { correctItems, failedItems };
}

function summarizePrompt(prompt: string): string {
  const normalized = prompt.replace(/\s+/gu, " ").trim();
  if (normalized.length <= 36) return normalized;
  return `${normalized.slice(0, 36)}...`;
}
