import { useEffect, useMemo, useState } from "react";
import { upsertAnswerOverride } from "./app/answerOverrideUpdate";
import { createStudyFile } from "./app/createStudyFile";
import {
  deleteFileFromLibrary,
  deleteFolderFromLibrary,
} from "./app/deleteLibraryItems";
import { ensureInitialFolder } from "./app/initialLibrary";
import {
  removeFileQuestionReveals,
  removeFolderQuestionReveals,
  toggleQuestionReveal,
} from "./app/revealedQuestions";
import {
  applyQuestionOrder,
  buildFolderStudyFile,
} from "./app/studyFileSelection";
import type {
  AnswerOverride,
  Attempt,
  ExamDraft,
  Folder,
  LibraryState,
  OrderMode,
  StudyFile,
  ViewMode,
} from "./app/types";
import { createId } from "./infra/id";
import { createLocalStorageRepository } from "./infra/localStorageRepo";
import { EmptyState, Sidebar, Toast, TopAppBar } from "./ui/Shell";
import { ViewRouter } from "./ui/StudyViews";

type ThemeName = "opencode" | "resend";

const repository = createLocalStorageRepository();
export function App() {
  const [library, setLibrary] = useState<LibraryState>(() =>
    ensureInitialFolder(repository.load(), repository.saveLibrary),
  );
  const [selectedFolderId, setSelectedFolderId] = useState(
    () => library.folders[0]?.id ?? "",
  );
  const [selectedFileId, setSelectedFileId] = useState<string | null>(
    library.files[0]?.id ?? null,
  );
  const [viewMode, setViewMode] = useState<ViewMode>("single");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [examIndex, setExamIndex] = useState(0);
  const [revealed, setRevealed] = useState<ReadonlySet<string>>(new Set());
  const [toast, setToast] = useState("");
  const [theme, setTheme] = useState<ThemeName>("opencode");
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [isExamChromeCollapsed, setIsExamChromeCollapsed] = useState(false);
  const [orderMode, setOrderMode] = useState<OrderMode>("sequential");
  const [shuffleSeed, setShuffleSeed] = useState(0);

  const selectedSourceFile =
    library.files.find((file) => file.id === selectedFileId) ?? null;
  const selectedFolder =
    library.folders.find((folder) => folder.id === selectedFolderId) ??
    library.folders[0];
  const selectedStudyFile = useMemo(
    () =>
      selectedSourceFile ??
      buildFolderStudyFile(selectedFolder ?? null, library.files),
    [library.files, selectedFolder, selectedSourceFile],
  );
  const orderedStudyFile = useMemo(
    () => applyQuestionOrder(selectedStudyFile, orderMode, shuffleSeed),
    [orderMode, selectedStudyFile, shuffleSeed],
  );
  const currentQuestion = orderedStudyFile?.questions[currentIndex] ?? null;

  useEffect(() => {
    if (toast.length === 0) return;
    const timeout = window.setTimeout(() => setToast(""), 1800);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  function updateFiles(files: readonly StudyFile[]): void {
    repository.saveFiles(files);
    setLibrary((previous) => ({ ...previous, files }));
  }

  function updateAttempts(attempts: readonly Attempt[]): void {
    repository.saveAttempts(attempts);
    setLibrary((previous) => ({ ...previous, attempts }));
  }

  function updateExamDrafts(examDrafts: readonly ExamDraft[]): void {
    repository.saveExamDrafts(examDrafts);
    setLibrary((previous) => ({ ...previous, examDrafts }));
  }

  function saveAnswerOverride(override: AnswerOverride): void {
    const answerOverrides = upsertAnswerOverride(
      library.answerOverrides,
      override,
    );
    repository.saveAnswerOverrides(answerOverrides);
    setLibrary((previous) => ({ ...previous, answerOverrides }));
  }

  function persistLibraryState(state: LibraryState): void {
    repository.saveLibrary(state);
    setLibrary(state);
  }

  function saveExamDraft(draft: ExamDraft): void {
    const others = library.examDrafts.filter(
      (item) => item.fileId !== draft.fileId,
    );
    updateExamDrafts([...others, draft]);
  }

  function clearExamDraft(fileId: string): void {
    updateExamDrafts(
      library.examDrafts.filter((draft) => draft.fileId !== fileId),
    );
  }

  function addFolder(): void {
    const name = window.prompt("폴더명을 입력하세요", "새 폴더")?.trim();
    if (name === undefined || name.length === 0) return;
    const folder: Folder = {
      id: createId("folder"),
      name,
      createdAt: Date.now(),
    };
    const folders = [...library.folders, folder];
    repository.saveFolders(folders);
    setLibrary((previous) => ({ ...previous, folders }));
    setSelectedFolderId(folder.id);
    setSelectedFileId(null);
    setCurrentIndex(0);
    setExamIndex(0);
  }

  async function importFile(file: File): Promise<void> {
    const text = await file.text();
    importText(file.name, text);
  }

  function importText(name: string, text: string): void {
    const folderId = selectedFolder?.id ?? library.folders[0]?.id;
    if (folderId === undefined) return;
    const studyFile = createStudyFile(folderId, name, text);
    updateFiles([...library.files, studyFile]);
    setSelectedFileId(studyFile.id);
    setCurrentIndex(0);
    setExamIndex(0);
    setToast(`${name} 불러오기 완료`);
  }

  function deleteFile(fileId: string): void {
    const nextLibrary = deleteFileFromLibrary(library, fileId);
    persistLibraryState(nextLibrary);
    if (selectedFileId === fileId) {
      setSelectedFileId(nextLibrary.files[0]?.id ?? null);
      setCurrentIndex(0);
      setExamIndex(0);
    }
    setRevealed((previous) =>
      removeFileQuestionReveals(previous, library.files, fileId),
    );
  }

  function deleteFolder(folderId: string): void {
    const deletedFileIds = new Set(
      library.files
        .filter((file) => file.folderId === folderId)
        .map((file) => file.id),
    );
    const nextLibrary = deleteFolderFromLibrary(library, folderId, () => ({
      id: createId("folder"),
      name: "기본 폴더",
      createdAt: Date.now(),
    }));
    persistLibraryState(nextLibrary);
    if (selectedFolderId === folderId)
      setSelectedFolderId(nextLibrary.folders[0]?.id ?? "");
    if (selectedFileId !== null && deletedFileIds.has(selectedFileId)) {
      setSelectedFileId(nextLibrary.files[0]?.id ?? null);
      setCurrentIndex(0);
      setExamIndex(0);
    }
    setRevealed((previous) =>
      removeFolderQuestionReveals(previous, library.files, deletedFileIds),
    );
  }

  return (
    <div
      className={[
        "app-shell",
        viewMode === "exam" && isExamChromeCollapsed
          ? "exam-chrome-collapsed"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-testid="app-shell"
      data-theme={theme}
    >
      <Sidebar
        folders={library.folders}
        files={library.files}
        selectedFolderId={selectedFolderId}
        selectedFileId={selectedFileId}
        onAddFolder={addFolder}
        isDeleteMode={isDeleteMode}
        onImportFile={importFile}
        onDeleteFile={deleteFile}
        onDeleteFolder={deleteFolder}
        onSelectFolder={(folderId) => {
          setSelectedFolderId(folderId);
          setSelectedFileId(null);
          setCurrentIndex(0);
          setExamIndex(0);
        }}
        onSelectFile={(fileId) => {
          const file = library.files.find((item) => item.id === fileId);
          if (file !== undefined) setSelectedFolderId(file.folderId);
          setSelectedFileId(fileId);
          setCurrentIndex(0);
          setExamIndex(0);
        }}
        theme={theme}
        onToggleTheme={() =>
          setTheme((previous) =>
            previous === "opencode" ? "resend" : "opencode",
          )
        }
        onToggleDeleteMode={() => setIsDeleteMode((previous) => !previous)}
      />
      <main className="main-pane">
        <TopAppBar
          mode={viewMode}
          theme={theme}
          onChangeMode={setViewMode}
          onToggleTheme={() =>
            setTheme((previous) =>
              previous === "opencode" ? "resend" : "opencode",
            )
          }
        />
        <section className="content-scroll">
          {orderedStudyFile === null ? (
            <EmptyState />
          ) : (
            <ViewRouter
              mode={viewMode}
              file={orderedStudyFile}
              attempts={library.attempts}
              examDrafts={library.examDrafts}
              answerOverrides={library.answerOverrides}
              currentIndex={currentIndex}
              examIndex={examIndex}
              isExamChromeCollapsed={isExamChromeCollapsed}
              currentQuestion={currentQuestion}
              orderMode={orderMode}
              revealed={revealed}
              onToggleOrder={() => {
                if (orderMode === "sequential")
                  setShuffleSeed((seed) => seed + 1);
                setOrderMode(
                  orderMode === "sequential" ? "shuffle" : "sequential",
                );
                setCurrentIndex(0);
                setExamIndex(0);
              }}
              onReveal={(id) =>
                setRevealed((previous) => toggleQuestionReveal(previous, id))
              }
              onMove={setCurrentIndex}
              onMoveExam={setExamIndex}
              onToggleExamChrome={() =>
                setIsExamChromeCollapsed((previous) => !previous)
              }
              onSaveAttempt={(attempt) =>
                updateAttempts([...library.attempts, attempt])
              }
              onSaveAnswerOverride={saveAnswerOverride}
              onSaveExamDraft={saveExamDraft}
              onClearExamDraft={clearExamDraft}
            />
          )}
        </section>
        <Toast message={toast} />
      </main>
    </div>
  );
}
