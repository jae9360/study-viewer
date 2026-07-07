import { parseQuestions } from "../domain/parseQuestions";
import { createId } from "../infra/id";
import type { StudyFile } from "./types";

export function createStudyFile(
  folderId: string,
  name: string,
  text: string,
): StudyFile {
  return {
    id: createId("file"),
    folderId,
    name,
    content: text,
    questions: parseQuestions(text),
    importedAt: Date.now(),
  };
}
