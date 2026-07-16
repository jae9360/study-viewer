import type { OrderMode } from "../app/types";

export type ProgressQuestionOption = {
  readonly index: number;
  readonly label: string;
};

export function ProgressStrip({
  correctItems,
  failedItems,
  isCompact = false,
  total,
  timerText,
  orderMode,
  onToggleOrder,
  onReset,
  onSelectQuestion,
}: {
  readonly correctItems: readonly ProgressQuestionOption[];
  readonly failedItems: readonly ProgressQuestionOption[];
  readonly isCompact?: boolean;
  readonly total: number;
  readonly timerText?: string;
  readonly orderMode: OrderMode;
  readonly onToggleOrder: () => void;
  readonly onReset?: () => void;
  readonly onSelectQuestion: (index: number) => void;
}) {
  const answered = correctItems.length + failedItems.length;
  const percent = total === 0 ? 0 : Math.round((answered / total) * 100);
  return (
    <section
      aria-label="시험 진행도"
      className={isCompact ? "progress-strip compact" : "progress-strip"}
    >
      <div className="progress-status">
        <ProgressSelect
          label="정답 수"
          ariaLabel="정답 문항 이동"
          summary={`${correctItems.length} / ${total}`}
          emptyText="정답문항 없음"
          items={correctItems}
          onSelectQuestion={onSelectQuestion}
        />
        <ProgressSelect
          label="오답 수"
          ariaLabel="오답 문항 이동"
          summary={`${failedItems.length} / ${total}`}
          emptyText="오답문항 없음"
          items={failedItems}
          onSelectQuestion={onSelectQuestion}
        />
      </div>
      <OrderButton orderMode={orderMode} onToggleOrder={onToggleOrder} />
      <div className="progress-actions">
        <span className="progress-label">진행도</span>
        <div
          aria-label={`진행도 ${answered} / ${total}`}
          aria-valuemax={total}
          aria-valuemin={0}
          aria-valuenow={answered}
          className="bar"
          role="progressbar"
        >
          <div style={{ width: `${percent}%` }} />
        </div>
        <div className="progress-time">
          {onReset === undefined ? null : (
            <button
              aria-label="새로고침"
              className="timer-reset"
              type="button"
              onClick={onReset}
            >
              ↻
            </button>
          )}
          {timerText === undefined ? null : (
            <span className="timer-chip">{timerText}</span>
          )}
        </div>
      </div>
    </section>
  );
}

function ProgressSelect({
  label,
  ariaLabel,
  summary,
  emptyText,
  items,
  onSelectQuestion,
}: {
  readonly label: string;
  readonly ariaLabel: string;
  readonly summary: string;
  readonly emptyText: string;
  readonly items: readonly ProgressQuestionOption[];
  readonly onSelectQuestion: (index: number) => void;
}) {
  return (
    <label className="progress-picker">
      <span>{label}</span>
      <select
        aria-label={ariaLabel}
        value=""
        onChange={(event) => {
          const { value } = event.currentTarget;
          if (value === "") return;
          const index = Number(value);
          if (Number.isInteger(index)) onSelectQuestion(index);
        }}
      >
        <option value="">{summary}</option>
        {items.length === 0 ? (
          <option disabled>{emptyText}</option>
        ) : (
          items.map((item) => (
            <option key={item.index} value={item.index}>
              {item.label}
            </option>
          ))
        )}
      </select>
    </label>
  );
}

export function OrderStrip({
  orderMode,
  onToggleOrder,
}: {
  readonly orderMode: OrderMode;
  readonly onToggleOrder: () => void;
}) {
  return (
    <section className="order-strip">
      <OrderButton orderMode={orderMode} onToggleOrder={onToggleOrder} />
    </section>
  );
}

function OrderButton({
  orderMode,
  onToggleOrder,
}: {
  readonly orderMode: OrderMode;
  readonly onToggleOrder: () => void;
}) {
  return (
    <button className="order-toggle" type="button" onClick={onToggleOrder}>
      {orderModeLabels[orderMode]}
    </button>
  );
}

const orderModeLabels = {
  sequential: "순차",
  shuffle: "무작위",
  "wrong-only": "오답만",
} satisfies Record<OrderMode, string>;
