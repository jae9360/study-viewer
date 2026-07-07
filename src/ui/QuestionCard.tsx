import type { Question } from "../app/types";
import { EditableAnswer } from "./EditableAnswer";
import { QuestionPrompt } from "./QuestionPrompt";

export function QuestionCard({
  question,
  effectiveAnswer,
  revealed,
  onReveal,
  onSaveAnswerOverride,
  reference,
  answerMode,
}: {
  readonly question: Question;
  readonly effectiveAnswer: string | null;
  readonly revealed: boolean;
  readonly onReveal: () => void;
  readonly onSaveAnswerOverride?: (answer: string) => void;
  readonly reference: string;
  readonly answerMode: "mask" | "visible";
}) {
  return (
    <article className="question-card">
      <div className="question-meta">
        <span>Question {question.index.toString().padStart(2, "0")}</span>
        <small>{reference}</small>
      </div>
      <QuestionPrompt text={question.prompt} />
      {answerMode === "mask" ? (
        <AnswerMask
          question={question}
          answer={effectiveAnswer}
          revealed={revealed}
          onReveal={onReveal}
          {...(onSaveAnswerOverride === undefined
            ? {}
            : { onSaveAnswerOverride })}
        />
      ) : (
        <EditableAnswer
          question={question}
          answer={effectiveAnswer}
          variant="visible"
        />
      )}
    </article>
  );
}

function AnswerMask({
  question,
  answer,
  revealed,
  onReveal,
  onSaveAnswerOverride,
}: {
  readonly question: Question;
  readonly answer: string | null;
  readonly revealed: boolean;
  readonly onReveal: () => void;
  readonly onSaveAnswerOverride?: (answer: string) => void;
}) {
  if (answer === null)
    return <div className="mask neutral">정답 구문 없음</div>;
  if (revealed)
    return (
      <EditableAnswer
        question={question}
        answer={answer}
        variant="mask"
        onConceal={onReveal}
        {...(onSaveAnswerOverride === undefined
          ? {}
          : { onEdit: onSaveAnswerOverride })}
      />
    );
  return (
    <button className="mask" type="button" onClick={onReveal}>
      정답 보기
    </button>
  );
}
