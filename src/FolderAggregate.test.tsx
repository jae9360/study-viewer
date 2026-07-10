import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { App } from "./App";

describe("Folder aggregate questions", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.spyOn(crypto, "randomUUID")
      .mockReturnValueOnce("11111111-0000-4000-8000-000000000000")
      .mockReturnValueOnce("22222222-0000-4000-8000-000000000000");
  });

  it("loads every question from files inside the selected folder", async () => {
    const user = userEvent.setup();
    const first = new File(
      ["1. 첫 파일 1\n답: A\n2. 첫 파일 2\n답: B"],
      "one.md",
      {
        type: "text/markdown",
      },
    );
    const second = new File(
      ["1. 둘째 파일 1\n답: C\n2. 둘째 파일 2\n답: D"],
      "two.md",
      { type: "text/markdown" },
    );
    render(<App />);

    await user.upload(screen.getByLabelText("md/txt 불러오기"), first);
    await user.upload(screen.getByLabelText("md/txt 불러오기"), second);
    await user.click(screen.getByRole("button", { name: "doc" }));
    expect(screen.queryByText("Folder · doc")).not.toBeInTheDocument();

    expect(screen.getByText("QUESTION 1 / 211")).toBeInTheDocument();
    expect(document.querySelector(".question-prompt")).toHaveTextContent(
      "정보처리기사 실기",
    );
    expect(document.querySelector(".question-prompt")).not.toHaveTextContent(
      "one.md",
    );
    expect(
      screen.getByText(
        "doc - 정보처리기사_실기_개념요약본.md · QUESTION 1 / 211",
      ),
    ).toBeInTheDocument();
    expect(
      screen.queryByText("진행도 (Test Progress)"),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("00:00:00")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "순차" }));

    expect(screen.getByRole("button", { name: "무작위" })).toBeInTheDocument();
    expect(screen.getByText("QUESTION 1 / 211")).toBeInTheDocument();
    expect(document.querySelector(".question-prompt")).not.toHaveTextContent(
      "정보처리기사 실기",
    );
    const firstShufflePrompt =
      document.querySelector(".question-prompt")?.textContent ?? "";

    await user.click(screen.getByRole("button", { name: "무작위" }));

    expect(screen.getByRole("button", { name: "순차" })).toBeInTheDocument();
    expect(screen.getByText("QUESTION 1 / 211")).toBeInTheDocument();
    expect(document.querySelector(".question-prompt")).toHaveTextContent(
      "정보처리기사 실기",
    );

    await user.click(screen.getByRole("button", { name: "순차" }));

    expect(screen.getByRole("button", { name: "무작위" })).toBeInTheDocument();
    expect(document.querySelector(".question-prompt")).not.toHaveTextContent(
      firstShufflePrompt,
    );

    await user.click(screen.getByRole("button", { name: "시험보기" }));

    expect(
      screen.getByRole("region", { name: "시험 진행도" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "무작위" })).toBeInTheDocument();
    expect(screen.getByText("00:00:00")).toBeInTheDocument();
    expect(
      screen.getByText(/doc - .*\.md · QUESTION 1 \/ 211/),
    ).toBeInTheDocument();
  });
});
