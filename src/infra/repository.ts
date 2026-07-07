import type {
  AnswerOverride,
  Attempt,
  ExamDraft,
  Folder,
  LibraryState,
  StudyFile,
} from "../app/types";

export type Repository = {
  readonly load: () => LibraryState;
  readonly saveLibrary: (state: LibraryState) => void;
  readonly saveFolders: (folders: readonly Folder[]) => void;
  readonly saveFiles: (files: readonly StudyFile[]) => void;
  readonly saveAttempts: (attempts: readonly Attempt[]) => void;
  readonly saveAnswerOverrides: (overrides: readonly AnswerOverride[]) => void;
  readonly saveExamDrafts: (drafts: readonly ExamDraft[]) => void;
};

export const emptyLibrary: LibraryState = {
  folders: [],
  files: [],
  attempts: [],
  answerOverrides: [],
  examDrafts: [],
};
