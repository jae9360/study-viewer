import type { Question } from "../app/types";
import { checkCorrectness } from "../domain/correctness";
import { displayAnswer } from "../domain/displayAnswer";
import { InlineCodeText, QuestionPrompt } from "./QuestionPrompt";

export function ExamQuestion({
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
  if (answer === null) return null;
  const displayText = displayAnswer(answer, rawAnswer);
  return (
    <div className="exam-saved-answer">
      <div className="exam-answer-line">
        <span>
          <InlineCodeText text={`정답: ${displayText}`} />
        </span>
        <button
          aria-label="정답 복사"
          className="answer-copy"
          title="정답 복사"
          type="button"
          onClick={() => {
            void copyText(displayText);
          }}
        >
          <svg
            aria-hidden="true"
            fill="none"
            height="14"
            viewBox="0 0 24 24"
            width="14"
          >
            <path
              d="M8 8h11v11H8z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M5 16H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
      <strong className={isCorrect ? "result correct" : "result wrong"}>
        {isCorrect ? "정답입니다" : "오답입니다"}
      </strong>
    </div>
  );
}

async function copyText(text: string): Promise<void> {
  if (navigator.clipboard !== undefined) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}
