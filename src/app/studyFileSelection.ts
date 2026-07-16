import type { Attempt, Folder, OrderMode, StudyFile } from "./types";

export function buildFolderStudyFile(
  folder: Folder | null,
  files: readonly StudyFile[],
): StudyFile | null {
  if (folder === null) return null;
  const folderFiles = files.filter((file) => file.folderId === folder.id);
  if (folderFiles.length === 0) return null;
  const questions = folderFiles.flatMap((file) =>
    file.questions.map((question) => ({
      ...question,
      id: `${file.id}_${question.id}`,
      sourceFileName: file.name,
      sourceFolderName: folder.name,
    })),
  );
  return {
    id: `folder_${folder.id}`,
    folderId: folder.id,
    name: folder.name,
    content: folderFiles.map((file) => file.content).join("\n\n"),
    questions,
    importedAt: Math.max(...folderFiles.map((file) => file.importedAt)),
  };
}

export function applyQuestionOrder(
  file: StudyFile | null,
  orderMode: OrderMode,
  shuffleSeed: number,
  latestAttempt: Attempt | null = null,
): StudyFile | null {
  if (file === null) return null;
  const questions = orderQuestions(file, orderMode, shuffleSeed, latestAttempt);
  return {
    ...file,
    questions: questions.map((question, index) => ({
      ...question,
      index: index + 1,
    })),
  };
}

export function findLatestAttempt(
  attempts: readonly Attempt[],
  fileId: string,
): Attempt | null {
  return (
    attempts
      .filter((attempt) => attempt.fileId === fileId)
      .toSorted((left, right) => right.finishedAt - left.finishedAt)[0] ?? null
  );
}

function orderQuestions(
  file: StudyFile,
  orderMode: OrderMode,
  shuffleSeed: number,
  latestAttempt: Attempt | null,
) {
  switch (orderMode) {
    case "sequential":
      return file.questions;
    case "shuffle":
      return shuffleQuestions(file.questions, file.id, shuffleSeed);
    case "wrong-only":
      return shuffleQuestions(
        file.questions.filter(
          (question) => latestAttempt?.results[question.id] === false,
        ),
        `${file.id}_wrong`,
        shuffleSeed,
      );
  }
}

function shuffleQuestions<T extends { readonly id: string }>(
  questions: readonly T[],
  sourceId: string,
  shuffleSeed: number,
): readonly T[] {
  if (questions.length < 2) return questions;
  const visibleFirstIndex = (shuffleSeed % (questions.length - 1)) + 1;
  const visibleFirst = questions[visibleFirstIndex];
  if (visibleFirst === undefined) return questions;

  const shuffled = questions.filter((_, index) => index !== visibleFirstIndex);
  let state = hashText(`${sourceId}_${shuffleSeed}`);
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    state = nextSeed(state);
    const swapIndex = state % (index + 1);
    const current = shuffled[index];
    const target = shuffled[swapIndex];
    if (current === undefined || target === undefined) continue;
    shuffled[index] = target;
    shuffled[swapIndex] = current;
  }
  return [visibleFirst, ...shuffled];
}

function hashText(value: string): number {
  let hash = 0;
  for (const character of value) {
    hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  }
  return hash;
}

function nextSeed(seed: number): number {
  return (seed * 1664525 + 1013904223) >>> 0;
}
