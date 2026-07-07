import type { Folder, OrderMode, StudyFile } from "./types";

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
): StudyFile | null {
  if (file === null) return null;
  const questions =
    orderMode === "sequential"
      ? file.questions
      : shuffleQuestions(file.questions, file.id, shuffleSeed);
  return {
    ...file,
    questions: questions.map((question, index) => ({
      ...question,
      index: index + 1,
    })),
  };
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
