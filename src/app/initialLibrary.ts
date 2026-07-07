import conceptSummary from "../../doc/정보처리기사_실기_개념요약본.md?raw";
import writtenQuestions from "../../doc/정보처리기사_실기_주관식_200제.md?raw";
import { parseQuestions } from "../domain/parseQuestions";
import type { Folder, LibraryState, StudyFile } from "./types";

export function ensureInitialFolder(
  state: LibraryState,
  saveLibrary: (state: LibraryState) => void,
): LibraryState {
  if (state.folders.length > 0) return state;
  const library = { ...state, folders: [docFolder], files: docFiles };
  saveLibrary(library);
  return library;
}

const importedAt = Date.UTC(2026, 6, 7);

const docFolder: Folder = {
  id: "folder_doc",
  name: "doc",
  createdAt: importedAt,
};

const docFiles: readonly StudyFile[] = [
  createDocFile(
    "doc_concept_summary",
    "정보처리기사_실기_개념요약본.md",
    conceptSummary,
  ),
  createDocFile(
    "doc_written_200",
    "정보처리기사_실기_주관식_200제.md",
    writtenQuestions,
  ),
];

function createDocFile(id: string, name: string, content: string): StudyFile {
  return {
    id,
    folderId: docFolder.id,
    name,
    content,
    questions: parseQuestions(content),
    importedAt,
  };
}
