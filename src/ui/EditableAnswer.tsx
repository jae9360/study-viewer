import { useEffect, useRef, useState } from "react";
import type { Question } from "../app/types";
import { displayAnswer } from "../domain/displayAnswer";
import { InlineCodeText } from "./QuestionPrompt";

export function EditableAnswer({
  question,
  answer,
  variant,
  onConceal,
  onEdit,
}: {
  readonly question: Question;
  readonly answer: string | null;
  readonly variant: "mask" | "visible";
  readonly onConceal?: () => void;
  readonly onEdit?: (answer: string) => void;
}) {
  const [showRaw, setShowRaw] = useState(false);
  const singleClickTimer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (singleClickTimer.current !== null)
        window.clearTimeout(singleClickTimer.current);
    },
    [],
  );

  if (answer === null) return null;

  return (
    <div className={showRaw ? "answer-editable raw-mode" : "answer-editable"}>
      <button
        className={variant === "mask" ? "mask revealed" : "visible-answer"}
        type="button"
        onClick={(event) => {
          if (variant !== "mask" || onConceal === undefined) return;
          if (event.detail !== 1) return;
          singleClickTimer.current = window.setTimeout(onConceal, 180);
        }}
        onDoubleClick={() => {
          if (singleClickTimer.current !== null)
            window.clearTimeout(singleClickTimer.current);
          setShowRaw((previous) => !previous);
        }}
      >
        <InlineCodeText
          text={
            showRaw
              ? (question.rawAnswer ?? answer)
              : `정답: ${displayAnswer(answer, question.rawAnswer)}`
          }
        />
      </button>
      {onEdit === undefined ? null : (
        <button
          className="answer-edit"
          type="button"
          onClick={() => {
            const nextAnswer = window
              .prompt("정답을 수정하세요", answer)
              ?.trim();
            if (nextAnswer === undefined || nextAnswer.length === 0) return;
            onEdit(nextAnswer);
            setShowRaw(false);
          }}
        >
          정답 수정
        </button>
      )}
    </div>
  );
}
