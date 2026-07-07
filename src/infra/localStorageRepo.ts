import type { LibraryState } from "../app/types";
import { emptyLibrary, type Repository } from "./repository";

const storageKey = "STUDY_VIEWER_LIBRARY_V1";

type StorageLike = Pick<Storage, "getItem" | "setItem">;

export function createLocalStorageRepository(
  storage: StorageLike = window.localStorage,
): Repository {
  return {
    load: () => loadLibrary(storage),
    saveFolders: (folders) =>
      persist(storage, { ...loadLibrary(storage), folders }),
    saveFiles: (files) => persist(storage, { ...loadLibrary(storage), files }),
    saveAttempts: (attempts) =>
      persist(storage, { ...loadLibrary(storage), attempts }),
    saveAnswerOverrides: (answerOverrides) =>
      persist(storage, { ...loadLibrary(storage), answerOverrides }),
    saveExamDrafts: (examDrafts) =>
      persist(storage, { ...loadLibrary(storage), examDrafts }),
  };
}

function loadLibrary(storage: StorageLike): LibraryState {
  const raw = storage.getItem(storageKey);
  if (raw === null) return emptyLibrary;
  const parsed = JSON.parse(raw) as Partial<LibraryState>;
  return {
    folders: Array.isArray(parsed.folders) ? parsed.folders : [],
    files: Array.isArray(parsed.files) ? parsed.files : [],
    attempts: Array.isArray(parsed.attempts) ? parsed.attempts : [],
    answerOverrides: Array.isArray(parsed.answerOverrides)
      ? parsed.answerOverrides
      : [],
    examDrafts: Array.isArray(parsed.examDrafts) ? parsed.examDrafts : [],
  };
}

function persist(storage: StorageLike, state: LibraryState): void {
  storage.setItem(storageKey, JSON.stringify(state));
}
