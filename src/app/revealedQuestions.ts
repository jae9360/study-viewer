import type { StudyFile } from "./types";

export function toggleQuestionReveal(
  revealed: ReadonlySet<string>,
  questionId: string,
): ReadonlySet<string> {
  const next = new Set(revealed);
  if (next.has(questionId)) next.delete(questionId);
  else next.add(questionId);
  return next;
}

export function removeFileQuestionReveals(
  revealed: ReadonlySet<string>,
  files: readonly StudyFile[],
  fileId: string,
): ReadonlySet<string> {
  const next = new Set(revealed);
  const deletedFile = files.find((file) => file.id === fileId);
  deletedFile?.questions.forEach((question) => {
    next.delete(question.id);
  });
  return next;
}

export function removeFolderQuestionReveals(
  revealed: ReadonlySet<string>,
  files: readonly StudyFile[],
  deletedFileIds: ReadonlySet<string>,
): ReadonlySet<string> {
  const next = new Set(revealed);
  files
    .filter((file) => deletedFileIds.has(file.id))
    .flatMap((file) => file.questions)
    .forEach((question) => {
      next.delete(question.id);
    });
  return next;
}
