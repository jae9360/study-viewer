import { describe, expect, it } from "vitest";
import type {
  AnswerOverride,
  ExamDraft,
  Folder,
  StudyFile,
} from "../app/types";
import { createLocalStorageRepository } from "./localStorageRepo";

class MemoryStorage implements Pick<Storage, "getItem" | "setItem"> {
  private value: string | null = null;

  getItem(): string | null {
    return this.value;
  }

  setItem(_key: string, value: string): void {
    this.value = value;
  }
}

describe("createLocalStorageRepository", () => {
  it("round-trips folders and files", () => {
    const repository = createLocalStorageRepository(new MemoryStorage());
    const folder: Folder = { id: "f1", name: "기본", createdAt: 1 };
    const file: StudyFile = {
      id: "file1",
      folderId: "f1",
      name: "sample.md",
      content: "문제\n답: 1",
      questions: [
        { id: "q1", index: 1, prompt: "문제", rawAnswer: "1", answer: "1" },
      ],
      importedAt: 2,
    };
    const override: AnswerOverride = {
      fileId: "file1",
      questionId: "q1",
      answer: "로컬",
      updatedAt: 3,
    };
    const draft: ExamDraft = {
      fileId: "file1",
      answers: { q1: "임시" },
      startedAt: 4,
    };

    repository.saveFolders([folder]);
    repository.saveFiles([file]);
    repository.saveAnswerOverrides([override]);
    repository.saveExamDrafts([draft]);

    expect(repository.load()).toMatchObject({
      folders: [folder],
      files: [file],
      attempts: [],
      answerOverrides: [override],
      examDrafts: [draft],
    });
  });
});
