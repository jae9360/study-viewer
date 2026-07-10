import { useEffect } from "react";
import type {
  AnswerOverride,
  Attempt,
  ExamDraft,
  OrderMode,
  Question,
  StudyFile,
  ViewMode,
} from "../app/types";
import { buildOverrideMap, effectiveAnswer } from "../domain/answerOverride";
import { ExamView } from "./ExamView";
import { OrderStrip } from "./ProgressControls";
import { QuestionCard } from "./QuestionCard";
import { StatsView } from "./StatsView";

export function ViewRouter(props: {
  readonly mode: ViewMode;
  readonly file: StudyFile;
  readonly attempts: readonly Attempt[];
  readonly examDrafts: readonly ExamDraft[];
  readonly answerOverrides: readonly AnswerOverride[];
  readonly currentIndex: number;
  readonly examIndex: number;
  readonly isExamChromeCollapsed: boolean;
  readonly currentQuestion: Question | null;
  readonly orderMode: OrderMode;
  readonly revealed: ReadonlySet<string>;
  readonly onToggleOrder: () => void;
  readonly onReveal: (id: string) => void;
  readonly onMove: (index: number) => void;
  readonly onMoveExam: (index: number) => void;
  readonly onToggleExamChrome: () => void;
  readonly onSaveAttempt: (attempt: Attempt) => void;
  readonly onSaveAnswerOverride: (override: AnswerOverride) => void;
  readonly onSaveExamDraft: (draft: ExamDraft) => void;
  readonly onClearExamDraft: (fileId: string) => void;
}) {
  if (props.mode === "all") return <AllView {...props} />;
  if (props.mode === "exam")
    return (
      <ExamView
        file={props.file}
        attempts={props.attempts}
        examDrafts={props.examDrafts}
        answerOverrides={props.answerOverrides}
        currentIndex={props.examIndex}
        isChromeCollapsed={props.isExamChromeCollapsed}
        orderMode={props.orderMode}
        onToggleOrder={props.onToggleOrder}
        onMove={props.onMoveExam}
        onToggleChrome={props.onToggleExamChrome}
        onSaveAttempt={props.onSaveAttempt}
        onSaveExamDraft={props.onSaveExamDraft}
        onClearExamDraft={props.onClearExamDraft}
      />
    );
  if (props.mode === "stats")
    return <StatsView files={[props.file]} attempts={props.attempts} />;
  return <SingleView {...props} />;
}

function SingleView(props: {
  readonly file: StudyFile;
  readonly answerOverrides: readonly AnswerOverride[];
  readonly currentIndex: number;
  readonly currentQuestion: Question | null;
  readonly orderMode: OrderMode;
  readonly revealed: ReadonlySet<string>;
  readonly onToggleOrder: () => void;
  readonly onReveal: (id: string) => void;
  readonly onSaveAnswerOverride: (override: AnswerOverride) => void;
  readonly onMove: (index: number) => void;
}) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.defaultPrevented || isTextInputTarget(event.target)) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        props.onMove(Math.max(0, props.currentIndex - 1));
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        props.onMove(
          Math.min(props.file.questions.length - 1, props.currentIndex + 1),
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [props.currentIndex, props.file.questions.length, props.onMove]);

  if (props.currentQuestion === null) return <EmptyQuestion />;
  const question = props.currentQuestion;
  const overrideMap = buildOverrideMap(props.answerOverrides, props.file.id);
  return (
    <>
      <OrderStrip
        orderMode={props.orderMode}
        onToggleOrder={props.onToggleOrder}
      />
      <div className="question-scroll">
        <QuestionCard
          question={question}
          effectiveAnswer={effectiveAnswer(question, overrideMap)}
          revealed={props.revealed.has(question.id)}
          onReveal={() => props.onReveal(question.id)}
          onSaveAnswerOverride={(answer) =>
            props.onSaveAnswerOverride({
              fileId: props.file.id,
              questionId: question.id,
              answer,
              updatedAt: Date.now(),
            })
          }
          reference={`${questionReference(question, props.file.name)} · QUESTION ${props.currentIndex + 1} / ${props.file.questions.length}`}
          answerMode="mask"
        />
      </div>
      <SingleNavigation
        index={props.currentIndex}
        total={props.file.questions.length}
        onPrev={() => props.onMove(Math.max(0, props.currentIndex - 1))}
        onNext={() =>
          props.onMove(
            Math.min(props.file.questions.length - 1, props.currentIndex + 1),
          )
        }
      />
    </>
  );
}

function isTextInputTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tagName = target.tagName.toLowerCase();
  return (
    tagName === "input" ||
    tagName === "textarea" ||
    tagName === "select" ||
    target.isContentEditable
  );
}

function AllView(props: {
  readonly file: StudyFile;
  readonly answerOverrides: readonly AnswerOverride[];
  readonly orderMode: OrderMode;
  readonly onToggleOrder: () => void;
}) {
  if (props.file.questions.length === 0) return <EmptyQuestion />;
  const overrideMap = buildOverrideMap(props.answerOverrides, props.file.id);
  return (
    <>
      <OrderStrip
        orderMode={props.orderMode}
        onToggleOrder={props.onToggleOrder}
      />
      <div className="question-scroll">
        <div className="stack">
          {props.file.questions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              effectiveAnswer={effectiveAnswer(question, overrideMap)}
              revealed={false}
              onReveal={() => undefined}
              reference={questionReference(question, props.file.name)}
              answerMode="visible"
            />
          ))}
        </div>
      </div>
    </>
  );
}

function SingleNavigation({
  index,
  total,
  onPrev,
  onNext,
}: {
  readonly index: number;
  readonly total: number;
  readonly onPrev: () => void;
  readonly onNext: () => void;
}) {
  return (
    <footer className="single-navigation">
      <button type="button" onClick={onPrev}>
        이전 문항
      </button>
      <strong>
        QUESTION {total === 0 ? 0 : index + 1} / {total}
      </strong>
      <button type="button" onClick={onNext}>
        다음 문항
      </button>
    </footer>
  );
}

function EmptyQuestion() {
  return (
    <div className="empty">
      <h2>표시할 문제가 없습니다.</h2>
      <p>답: 또는 정답: 구문이 없는 파일도 안전하게 불러올 수 있습니다.</p>
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
