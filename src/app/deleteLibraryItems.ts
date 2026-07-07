import type { Folder, LibraryState } from "./types";

export function deleteFileFromLibrary(
  library: LibraryState,
  fileId: string,
): LibraryState {
  return {
    ...library,
    files: library.files.filter((file) => file.id !== fileId),
    attempts: library.attempts.filter((attempt) => attempt.fileId !== fileId),
    answerOverrides: library.answerOverrides.filter(
      (override) => override.fileId !== fileId,
    ),
    examDrafts: library.examDrafts.filter((draft) => draft.fileId !== fileId),
  };
}

export function deleteFolderFromLibrary(
  library: LibraryState,
  folderId: string,
  createReplacementFolder: () => Folder,
): LibraryState {
  const deletedFileIds = new Set(
    library.files
      .filter((file) => file.folderId === folderId)
      .map((file) => file.id),
  );
  const remainingFolders = library.folders.filter(
    (folder) => folder.id !== folderId,
  );
  return {
    ...library,
    folders:
      remainingFolders.length > 0
        ? remainingFolders
        : [createReplacementFolder()],
    files: library.files.filter((file) => !deletedFileIds.has(file.id)),
    attempts: library.attempts.filter(
      (attempt) => !deletedFileIds.has(attempt.fileId),
    ),
    answerOverrides: library.answerOverrides.filter(
      (override) => !deletedFileIds.has(override.fileId),
    ),
    examDrafts: library.examDrafts.filter(
      (draft) => !deletedFileIds.has(draft.fileId),
    ),
  };
}
