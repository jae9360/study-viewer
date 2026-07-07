import { describe, expect, it } from "vitest";
import { parseQuestions } from "./parseQuestions";

describe("parseQuestions", () => {
  it("extracts answers from 답 markers and masks them out of prompts", () => {
    const questions = parseQuestions(
      "1. 수도는?\n답: 서울\n2. 2+2는?\n정답: 4",
    );

    expect(questions).toHaveLength(2);
    expect(questions[0]).toMatchObject({ index: 1, answer: "서울" });
    expect(questions[0]?.prompt).not.toContain("답:");
    expect(questions[1]).toMatchObject({ index: 2, answer: "4" });
  });

  it("supports fullwidth colon answer markers", () => {
    const questions = parseQuestions("Q1 다음 중 정답은?\n정답：2");

    expect(questions[0]?.answer).toBe("2");
  });

  it("cleans markdown wrappers from answers while preserving raw answer text", () => {
    const questions = parseQuestions(
      "1. 계산 결과는?\n정답: `106.00`\n2. 링크 유형은?\n정답: **심볼릭링크**",
    );

    expect(questions[0]).toMatchObject({
      answer: "106.00",
      rawAnswer: "`106.00`",
    });
    expect(questions[1]).toMatchObject({
      answer: "심볼릭링크",
      rawAnswer: "**심볼릭링크**",
    });
  });

  it("supports 정답 markers whose whole answer is wrapped in backticks", () => {
    const questions = parseQuestions("1. 계산 결과는?\n정답: `106.00`");

    expect(questions[0]).toMatchObject({
      answer: "106.00",
      rawAnswer: "`106.00`",
    });
  });

  it("cleans answers wrapped by nested backtick pairs", () => {
    const questions = parseQuestions("1. 숫자는?\n정답: ``2``");

    expect(questions[0]).toMatchObject({
      answer: "2",
      rawAnswer: "``2``",
    });
  });

  it("falls back to numbered blocks when answers are missing", () => {
    const questions = parseQuestions("1. 첫 문제\n본문\n2. 둘째 문제");

    expect(questions).toHaveLength(2);
    expect(questions[0]?.answer).toBeNull();
  });

  it("converts markdown answer table rows into questions", () => {
    const questions = parseQuestions(`| 번호 | 유형 | 핵심 내용 | 정답 |
|---|---|---|---|
| 1 | 테스트 | 동일 테스트 반복 시 새 버그 탐지 한계 | 살충제 패러독스 |
| 2 | 데이터 | 대규모 데이터에서 패턴/규칙 탐색 | 데이터 마이닝 |`);

    expect(questions).toHaveLength(2);
    expect(questions[0]).toMatchObject({
      index: 1,
      prompt: "유형: 테스트\n핵심 내용: 동일 테스트 반복 시 새 버그 탐지 한계",
      rawAnswer: "살충제 패러독스",
      answer: "살충제 패러독스",
    });
    expect(questions[1]).toMatchObject({
      index: 2,
      prompt: "유형: 데이터\n핵심 내용: 대규모 데이터에서 패턴/규칙 탐색",
      rawAnswer: "데이터 마이닝",
      answer: "데이터 마이닝",
    });
  });

  it("returns an empty list for empty content", () => {
    expect(parseQuestions("  \n")).toHaveLength(0);
  });
});
