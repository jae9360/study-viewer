import type { OrderMode } from "../app/types";

export function ProgressStrip({
  answered,
  total,
  timerText,
  orderMode,
  onToggleOrder,
  onReset,
}: {
  readonly answered: number;
  readonly total: number;
  readonly timerText?: string;
  readonly orderMode: OrderMode;
  readonly onToggleOrder: () => void;
  readonly onReset?: () => void;
}) {
  const percent = total === 0 ? 0 : Math.round((answered / total) * 100);
  return (
    <section className="progress-strip">
      <div className="progress-status">
        <span>진행도 (Test Progress)</span>
        <div className="bar">
          <div style={{ width: `${percent}%` }} />
        </div>
        <strong>
          Answered {answered} / {total}
        </strong>
      </div>
      <OrderButton orderMode={orderMode} onToggleOrder={onToggleOrder} />
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
    </section>
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
      {orderMode === "sequential" ? "순차" : "무작위"}
    </button>
  );
}
