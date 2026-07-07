import type { Attempt, StudyFile } from "../app/types";

export type QuestionStat = {
  readonly questionId: string;
  readonly fileId: string;
  readonly label: string;
  readonly attempts: number;
  readonly wrong: number;
  readonly wrongRate: number;
  readonly highlighted: boolean;
};

export function computeQuestionStats(
  files: readonly StudyFile[],
  attempts: readonly Attempt[],
  threshold: number,
): readonly QuestionStat[] {
  return files.flatMap((file) =>
    file.questions.map((question) => {
      const questionAttempts = attempts
        .filter((attempt) => attempt.fileId === file.id)
        .filter((attempt) => attempt.results[question.id] !== undefined);
      const wrong = questionAttempts.filter(
        (attempt) => attempt.results[question.id] === false,
      ).length;
      const count = questionAttempts.length;
      const wrongRate = count === 0 ? 0 : wrong / count;
      return {
        questionId: question.id,
        fileId: file.id,
        label: `${file.name} · ${question.index}번`,
        attempts: count,
        wrong,
        wrongRate,
        highlighted: count > 0 && wrongRate >= threshold,
      };
    }),
  );
}
