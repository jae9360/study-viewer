import { useMemo } from "react";
import type { Attempt, StudyFile } from "../app/types";
import { computeQuestionStats } from "../domain/stats";

const highWrongRateThreshold = 0.5;

export function StatsView({
  files,
  attempts,
}: {
  readonly files: readonly StudyFile[];
  readonly attempts: readonly Attempt[];
}) {
  const stats = useMemo(
    () => computeQuestionStats(files, attempts, highWrongRateThreshold),
    [files, attempts],
  );
  return (
    <div className="stats">
      <h2>통계</h2>
      {attempts.length === 0 ? <p>저장된 응시 결과가 없습니다.</p> : null}
      {stats.map((stat) => (
        <div
          key={`${stat.fileId}_${stat.questionId}`}
          className={stat.highlighted ? "stat-row hot" : "stat-row"}
        >
          <span>{stat.label}</span>
          <strong>오답률 {Math.round(stat.wrongRate * 100)}%</strong>
          <small>
            {stat.wrong}/{stat.attempts}
          </small>
        </div>
      ))}
    </div>
  );
}
