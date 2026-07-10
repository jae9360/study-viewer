import { describe, expect, it } from "vitest";
import { checkCorrectness, normalizeAnswer } from "./correctness";

describe("normalizeAnswer", () => {
  it("normalizes whitespace, case, and edge punctuation", () => {
    expect(normalizeAnswer("  Seoul.  ")).toBe("seoul");
    expect(normalizeAnswer("정  답")).toBe("정 답");
  });
});

describe("checkCorrectness", () => {
  it("checks answers by normalized exact match", () => {
    expect(checkCorrectness(" 4 ", "4")).toBe(true);
    expect(checkCorrectness("3", "4")).toBe(false);
    expect(checkCorrectness("", "4")).toBe(false);
  });

  it("matches answers without requiring spaces", () => {
    expect(checkCorrectness("정답처리", "정답 처리")).toBe(true);
    expect(checkCorrectness("newyork", "New York")).toBe(true);
  });

  it("matches base answers and English parenthetical aliases", () => {
    expect(checkCorrectness("서울", "서울 (Seoul)")).toBe(true);
    expect(checkCorrectness("seoul", "서울 (Seoul)")).toBe(true);
    expect(checkCorrectness("부산", "서울 (Seoul)")).toBe(false);
  });

  it("matches non-English parenthetical aliases", () => {
    expect(checkCorrectness("SRP", "SRP(단일 책임 원칙)")).toBe(true);
    expect(checkCorrectness("단일 책임 원칙", "SRP(단일 책임 원칙)")).toBe(
      true,
    );
    expect(checkCorrectness("단일책임원칙", "SRP(단일 책임 원칙)")).toBe(true);
    expect(checkCorrectness("OCP", "SRP(단일 책임 원칙)")).toBe(false);
  });

  it("matches ordered answer lists across spacing and list delimiters", () => {
    const correctAnswer = "계획 및 정의 → 위험 분석 → 개발 → 고객 평가";

    expect(
      checkCorrectness("계획및 정의, 위험 분석, 개발,고객 평가", correctAnswer),
    ).toBe(true);
    expect(
      checkCorrectness("계획및정의 위험분석 개발 고객평가", correctAnswer),
    ).toBe(true);
    expect(
      checkCorrectness("계획및정의 개발 위험분석 고객평가", correctAnswer),
    ).toBe(false);
  });
});
