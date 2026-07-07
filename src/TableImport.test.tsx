import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { App } from "./App";

describe("Markdown table import", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.spyOn(crypto, "randomUUID").mockReturnValue(
      "00000000-0000-4000-8000-000000000000",
    );
  });

  it("creates one question card per answer table row", async () => {
    const user = userEvent.setup();
    const markdown = `| 번호 | 유형 | 핵심 내용 | 정답 |
|---|---|---|---|
| 1 | 테스트 | 동일 테스트 반복 시 새 버그 탐지 한계 | 살충제 패러독스 |
| 2 | 데이터 | 대규모 데이터에서 패턴/규칙 탐색 | 데이터 마이닝 |
| 3 | 프로토콜 | 기본 요소 3가지 | 구문, 의미, 순서 |`;
    const file = new File([markdown], "table.md", { type: "text/markdown" });
    render(<App />);

    await user.upload(screen.getByLabelText("md/txt 불러오기"), file);

    expect(screen.getByRole("button", { name: /table\.md/ })).toHaveTextContent(
      "3문제",
    );
    expect(document.querySelector(".question-prompt")).toHaveTextContent(
      "유형: 테스트 핵심 내용: 동일 테스트 반복 시 새 버그 탐지 한계",
    );

    await user.click(screen.getByRole("button", { name: "정답 보기" }));

    expect(
      screen.getByRole("button", { name: "정답: 살충제 패러독스" }),
    ).toBeInTheDocument();
  });
});
