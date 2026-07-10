import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { App } from "./App";

describe("no-answer display", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.spyOn(crypto, "randomUUID").mockReturnValue(
      "00000000-0000-4000-8000-000000000000",
    );
  });

  it("hides answer chrome when a question has no answer syntax", async () => {
    const user = userEvent.setup();
    const file = new File(["1. 정답 구문이 없는 문제"], "no-answer.md", {
      type: "text/markdown",
    });
    render(<App />);

    await user.upload(screen.getByLabelText("md/txt 불러오기"), file);
    await user.click(screen.getByRole("button", { name: /no-answer\.md/ }));

    expect(screen.getByText("Question 01")).toBeInTheDocument();
    expect(screen.queryByText("정답 구문 없음")).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "정답 보기" }),
    ).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "모두보기" }));
    expect(screen.queryByText("정답 구문 없음")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "시험보기" }));
    await user.type(screen.getByPlaceholderText("답을 입력하세요"), "임의 답");
    await user.click(screen.getByRole("button", { name: "저장" }));

    expect(screen.queryByText("정답 구문 없음")).not.toBeInTheDocument();
    expect(screen.queryByText("정답입니다")).not.toBeInTheDocument();
    expect(screen.queryByText("오답입니다")).not.toBeInTheDocument();
  });
});
