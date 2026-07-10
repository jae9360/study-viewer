import { useEffect, useState } from "react";
import type {
  AnswerOverride,
  Attempt,
  ExamDraft,
  OrderMode,
  Question,
  StudyFile,
} from "../app/types";
import { buildOverrideMap, effectiveAnswer } from "../domain/answerOverride";
import { checkCorrectness } from "../domain/correctness";
import { gradeAnswers } from "../domain/scoring";
import { createId } from "../infra/id";
import { ExamAnswerFooter } from "./ExamAnswerFooter";
import { ExamQuestion } from "./ExamQuestion";
import { collectAnswerResults } from "./examProgress";
import { ProgressStrip } from "./ProgressControls";

export function ExamView({
  file,
  attempts,
  examDrafts,
  answerOverrides,
  currentIndex,
  isChromeCollapsed,
  orderMode,
  onToggleOrder,
  onMove,
  onToggleChrome,
  onSaveAttempt,
  onSaveExamDraft,
  onClearExamDraft,
}: {
  readonly file: StudyFile;
  readonly attempts: readonly Attempt[];
  readonly examDrafts: readonly ExamDraft[];
  readonly answerOverrides: readonly AnswerOverride[];
  readonly currentIndex: number;
  readonly isChromeCollapsed: boolean;
  readonly orderMode: OrderMode;
  readonly onToggleOrder: () => void;
  readonly onMove: (index: number) => void;
  readonly onToggleChrome: () => void;
  readonly onSaveAttempt: (attempt: Attempt) => void;
  readonly onSaveExamDraft: (draft: ExamDraft) => void;
  readonly onClearExamDraft: (fileId: string) => void;
}) {
  const latestAttempt = findLatestAttempt(attempts, file.id);
  const draft = examDrafts.find((item) => item.fileId === file.id) ?? null;
  const submittedAttempt = draft === null ? latestAttempt : null;
  const [startedAt, setStartedAt] = useState(draft?.startedAt ?? Date.now());
  const [now, setNow] = useState(Date.now());
  const [answers, setAnswers] = useState<Record<string, string>>(
    () => draft?.answers ?? submittedAttempt?.answers ?? {},
  );
  const [savedQuestionIds, setSavedQuestionIds] = useState<ReadonlySet<string>>(
    () =>
      new Set(Object.keys(draft?.answers ?? submittedAttempt?.answers ?? {})),
  );

  useEffect(() => {
    if (submittedAttempt !== null) return undefined;
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, [submittedAttempt]);

  useEffect(() => {
    const restoredAnswers = draft?.answers ?? submittedAttempt?.answers ?? {};
    setAnswers(restoredAnswers);
    setStartedAt(draft?.startedAt ?? submittedAttempt?.startedAt ?? Date.now());
    setSavedQuestionIds(new Set(Object.keys(restoredAnswers)));
    setNow(Date.now());
  }, [draft, submittedAttempt]);

  const question = file.questions[currentIndex] ?? null;
  const overrideMap = buildOverrideMap(answerOverrides, file.id);
  const answerResults = collectAnswerResults({
    questions: file.questions,
    answers,
    overrideMap,
    savedQuestionIds,
  });
  const timerText = formatTime(submittedAttempt?.durationMs ?? now - startedAt);
  const isSubmitted = submittedAttempt !== null;

  useEffect(() => {
    if (isSubmitted) return undefined;
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.defaultPrevented) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onMove(Math.max(0, currentIndex - 1));
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        onMove(Math.min(file.questions.length - 1, currentIndex + 1));
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, file.questions.length, isSubmitted, onMove]);

  function goPrevious(): void {
    onMove(Math.max(0, currentIndex - 1));
  }

  function goNext(): void {
    onMove(Math.min(file.questions.length - 1, currentIndex + 1));
  }

  function saveCurrent(): boolean {
    if (question === null) return false;
    const nextAnswers = answers;
    onSaveExamDraft({ fileId: file.id, answers: nextAnswers, startedAt });
    setSavedQuestionIds((previous) => new Set(previous).add(question.id));
    if (currentIndex >= file.questions.length - 1) {
      return submitExam(nextAnswers);
    }
    if (
      checkCorrectness(
        nextAnswers[question.id] ?? "",
        effectiveAnswer(question, overrideMap),
      ) &&
      currentIndex < file.questions.length - 1
    )
      onMove(currentIndex + 1);
    return true;
  }

  function submitExam(nextAnswers: Record<string, string>): boolean {
    if (isSubmitted) {
      window.alert("이미 제출 완료된 데이터입니다");
      return false;
    }
    if (question === null) return false;
    const finishedAt = Date.now();
    const score = gradeAnswers(file.questions, nextAnswers, overrideMap);
    onSaveAttempt({
      id: createId("attempt"),
      fileId: file.id,
      round:
        attempts.filter((attempt) => attempt.fileId === file.id).length + 1,
      answers: nextAnswers,
      results: score.results,
      score: score.score,
      total: score.total,
      startedAt,
      finishedAt,
      durationMs: finishedAt - startedAt,
    });
    onClearExamDraft(file.id);
    setSavedQuestionIds(new Set(file.questions.map((item) => item.id)));
    window.alert("저장되었습니다.");
    return true;
  }

  function submitCurrentExam(): boolean {
    return submitExam(answers);
  }

  function resetExam(): void {
    const nextStartedAt = Date.now();
    const emptyAnswers: Record<string, string> = {};
    onSaveExamDraft({
      fileId: file.id,
      answers: emptyAnswers,
      startedAt: nextStartedAt,
    });
    setStartedAt(nextStartedAt);
    setAnswers(emptyAnswers);
    setSavedQuestionIds(new Set());
    onMove(0);
    setNow(nextStartedAt);
  }

  return (
    <>
      <ProgressStrip
        correctItems={answerResults.correctItems}
        failedItems={answerResults.failedItems}
        isCompact={isChromeCollapsed}
        total={file.questions.length}
        timerText={timerText}
        orderMode={orderMode}
        onToggleOrder={onToggleOrder}
        onReset={resetExam}
        onSelectQuestion={onMove}
      />
      <ChromeCollapseHandle
        isCollapsed={isChromeCollapsed}
        onToggle={onToggleChrome}
      />
      <div className="question-scroll">
        <div className="exam">
          {question === null ? (
            <EmptyExam />
          ) : (
            <ExamQuestion
              question={question}
              correctAnswer={effectiveAnswer(question, overrideMap)}
              reference={`${questionReference(question, file.name)} · QUESTION ${currentIndex + 1} / ${file.questions.length}`}
              answer={answers[question.id] ?? ""}
              isSaved={isSubmitted || savedQuestionIds.has(question.id)}
            />
          )}
        </div>
      </div>
      <ExamAnswerFooter
        question={question}
        index={currentIndex}
        total={file.questions.length}
        answer={question === null ? "" : (answers[question.id] ?? "")}
        disabled={isSubmitted}
        onAnswer={(value) => {
          if (question !== null)
            setAnswers((previous) => ({ ...previous, [question.id]: value }));
        }}
        onSave={saveCurrent}
        onPrev={goPrevious}
        onNext={goNext}
        onSubmit={submitCurrentExam}
      />
    </>
  );
}

function ChromeCollapseHandle({
  isCollapsed,
  onToggle,
}: {
  readonly isCollapsed: boolean;
  readonly onToggle: () => void;
}) {
  return (
    <div className="chrome-collapse-hover">
      <button
        aria-label={
          isCollapsed ? "모바일 상단 메뉴 펼치기" : "모바일 상단 메뉴 접기"
        }
        className={
          isCollapsed
            ? "mobile-chrome-collapse-toggle collapsed"
            : "mobile-chrome-collapse-toggle"
        }
        type="button"
        onClick={onToggle}
      >
        <ChevronIcon pointsDown={isCollapsed} />
      </button>
    </div>
  );
}

function ChevronIcon({ pointsDown }: { readonly pointsDown: boolean }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="18"
      viewBox="0 0 24 24"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={pointsDown ? "m6 9 6 6 6-6" : "m6 15 6-6 6 6"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function findLatestAttempt(
  attempts: readonly Attempt[],
  fileId: string,
): Attempt | null {
  const fileAttempts = attempts.filter((attempt) => attempt.fileId === fileId);
  return fileAttempts.at(-1) ?? null;
}

function EmptyExam() {
  return (
    <div className="empty">
      <h2>시험 볼 문제가 없습니다.</h2>
    </div>
  );
}

function questionReference(
  question: Question,
  fallbackFileName: string,
): string {
  if (
    question.sourceFolderName !== undefined &&
    question.sourceFileName !== undefined
  )
    return `${question.sourceFolderName} - ${question.sourceFileName}`;
  return fallbackFileName;
}

function formatTime(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const hh = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const mm = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const ss = (seconds % 60).toString().padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}
