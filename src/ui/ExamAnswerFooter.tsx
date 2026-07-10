import type { KeyboardEvent } from "react";
import type { Question } from "../app/types";

export function ExamAnswerFooter(props: {
  readonly question: Question | null;
  readonly index: number;
  readonly total: number;
  readonly answer: string;
  readonly disabled: boolean;
  readonly onAnswer: (value: string) => void;
  readonly onSave: () => void;
  readonly onPrev: () => void;
  readonly onNext: () => void;
  readonly onSubmit: () => void;
}) {
  const isLast = props.index >= props.total - 1;
  function handleAnswerKeyDown(
    event: KeyboardEvent<HTMLTextAreaElement>,
  ): void {
    if (props.disabled || event.nativeEvent.isComposing) return;
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      event.stopPropagation();
      props.onSave();
      return;
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      event.stopPropagation();
      props.onPrev();
      return;
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      event.stopPropagation();
      props.onNext();
    }
  }

  return (
    <footer className="answer-footer">
      <section>
        <h3>답안 작성 영역</h3>
        <textarea
          value={props.answer}
          onChange={(event) => props.onAnswer(event.currentTarget.value)}
          onKeyDown={handleAnswerKeyDown}
          placeholder="답을 입력하세요"
          disabled={props.disabled}
        />
        <div className="footer-buttons">
          <button
            className="primary"
            type="button"
            onClick={props.onSave}
            disabled={props.question === null || props.disabled}
          >
            저장
          </button>
        </div>
      </section>
      <nav>
        <button type="button" onClick={props.onPrev}>
          이전 문항
        </button>
        <strong>
          QUESTION {props.total === 0 ? 0 : props.index + 1} / {props.total}
        </strong>
        <button type="button" onClick={isLast ? props.onSubmit : props.onNext}>
          {isLast ? "제출 완료" : "다음 문항"}
        </button>
      </nav>
    </footer>
  );
}
