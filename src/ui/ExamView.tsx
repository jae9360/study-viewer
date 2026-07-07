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
import { displayAnswer } from "../domain/displayAnswer";
import { gradeAnswers } from "../domain/scoring";
import { createId } from "../infra/id";
import { ExamAnswerFooter } from "./ExamAnswerFooter";
import { ProgressStrip } from "./ProgressControls";
import { InlineCodeText, QuestionPrompt } from "./QuestionPrompt";

export function ExamView({
  file,
  attempts,
  examDrafts,
  answerOverrides,
  orderMode,
  onToggleOrder,
  onSaveAttempt,
  onSaveExamDraft,
  onClearExamDraft,
}: {
  readonly file: StudyFile;
  readonly attempts: readonly Attempt[];
  readonly examDrafts: readonly ExamDraft[];
  readonly answerOverrides: readonly AnswerOverride[];
  readonly orderMode: OrderMode;
  readonly onToggleOrder: () => void;
  readonly onSaveAttempt: (attempt: Attempt) => void;
  readonly onSaveExamDraft: (draft: ExamDraft) => void;
  readonly onClearExamDraft: (fileId: string) => void;
}) {
  const latestAttempt = findLatestAttempt(attempts, file.id);
  const draft = examDrafts.find((item) => item.fileId === file.id) ?? null;
  const submittedAttempt = draft === null ? latestAttempt : null;
  const [startedAt, setStartedAt] = useState(draft?.startedAt ?? Date.now());
  const [now, setNow] = useState(Date.now());
  const [currentIndex, setCurrentIndex] = useState(0);
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
  const answered = file.questions.filter(
    (item) => (answers[item.id] ?? "").trim().length > 0,
  ).length;
  const timerText = formatTime(submittedAttempt?.durationMs ?? now - startedAt);
  const isSubmitted = submittedAttempt !== null;

  function saveCurrent(): void {
    if (question === null) return;
    const nextAnswers = answers;
    onSaveExamDraft({ fileId: file.id, answers: nextAnswers, startedAt });
    setSavedQuestionIds((previous) => new Set(previous).add(question.id));
  }

  function submitExam(): void {
    if (question === null) return;
    const finishedAt = Date.now();
    const score = gradeAnswers(file.questions, answers, overrideMap);
    onSaveAttempt({
      id: createId("attempt"),
      fileId: file.id,
      round:
        attempts.filter((attempt) => attempt.fileId === file.id).length + 1,
      answers,
      results: score.results,
      score: score.score,
      total: score.total,
      startedAt,
      finishedAt,
      durationMs: finishedAt - startedAt,
    });
    onClearExamDraft(file.id);
    setSavedQuestionIds(new Set(file.questions.map((item) => item.id)));
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
    setCurrentIndex(0);
    setNow(nextStartedAt);
  }

  return (
    <>
      <ProgressStrip
        answered={answered}
        total={file.questions.length}
        timerText={timerText}
        orderMode={orderMode}
        onToggleOrder={onToggleOrder}
        onReset={resetExam}
      />
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
        onPrev={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
        onNext={() =>
          setCurrentIndex(Math.min(file.questions.length - 1, currentIndex + 1))
        }
        onSubmit={submitExam}
      />
    </>
  );
}

function ExamQuestion({
  question,
  correctAnswer,
  reference,
  answer,
  isSaved,
}: {
  readonly question: Question;
  readonly correctAnswer: string | null;
  readonly reference: string;
  readonly answer: string;
  readonly isSaved: boolean;
}) {
  const isCorrect = checkCorrectness(answer, correctAnswer);
  return (
    <article className="question-card">
      <div className="question-meta">
        <span>Question {question.index.toString().padStart(2, "0")}</span>
        <small>{reference}</small>
      </div>
      <QuestionPrompt text={question.prompt} />
      {isSaved ? (
        <SavedAnswer
          answer={correctAnswer}
          rawAnswer={question.rawAnswer}
          isCorrect={isCorrect}
        />
      ) : null}
    </article>
  );
}

function SavedAnswer({
  answer,
  rawAnswer,
  isCorrect,
}: {
  readonly answer: string | null;
  readonly rawAnswer: string | null;
  readonly isCorrect: boolean;
}) {
  if (answer === null)
    return <div className="mask neutral">정답 구문 없음</div>;
  return (
    <div className="exam-saved-answer">
      <div>
        <InlineCodeText text={`정답: ${displayAnswer(answer, rawAnswer)}`} />
      </div>
      <strong className={isCorrect ? "result correct" : "result wrong"}>
        {isCorrect ? "정답입니다" : "오답입니다"}
      </strong>
    </div>
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
