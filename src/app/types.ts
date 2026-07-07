export type ViewMode = "single" | "all" | "exam" | "stats";
export type OrderMode = "sequential" | "shuffle";

export type Folder = {
  readonly id: string;
  readonly name: string;
  readonly createdAt: number;
};

export type Question = {
  readonly id: string;
  readonly index: number;
  readonly prompt: string;
  readonly rawAnswer: string | null;
  readonly answer: string | null;
  readonly sourceFileName?: string;
  readonly sourceFolderName?: string;
};

export type AnswerOverride = {
  readonly fileId: string;
  readonly questionId: string;
  readonly answer: string;
  readonly updatedAt: number;
};

export type StudyFile = {
  readonly id: string;
  readonly folderId: string;
  readonly name: string;
  readonly content: string;
  readonly questions: readonly Question[];
  readonly importedAt: number;
};

export type Attempt = {
  readonly id: string;
  readonly fileId: string;
  readonly round: number;
  readonly answers: Readonly<Record<string, string>>;
  readonly results: Readonly<Record<string, boolean>>;
  readonly score: number;
  readonly total: number;
  readonly startedAt: number;
  readonly finishedAt: number;
  readonly durationMs: number;
};

export type ExamDraft = {
  readonly fileId: string;
  readonly answers: Readonly<Record<string, string>>;
  readonly startedAt: number;
};

export type LibraryState = {
  readonly folders: readonly Folder[];
  readonly files: readonly StudyFile[];
  readonly attempts: readonly Attempt[];
  readonly answerOverrides: readonly AnswerOverride[];
  readonly examDrafts: readonly ExamDraft[];
};
