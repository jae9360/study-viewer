import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { App } from "./App";

describe("App", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.spyOn(crypto, "randomUUID").mockReturnValue(
      "00000000-0000-4000-8000-000000000000",
    );
  });

  it("keeps single/all view read-only and reveals answers only in single view", async () => {
    const user = userEvent.setup();
    render(<App />);

    await uploadSampleMarkdown(user);
    expect(screen.getByText("Question 01")).toBeInTheDocument();
    expect(
      screen.queryByText("진행도 (Test Progress)"),
    ).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "순차" })).toBeInTheDocument();
    expect(
      screen.queryByPlaceholderText("답을 입력하세요"),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByPlaceholderText("작성하신 답변은 자동으로 저장됩니다..."),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "정답 보기" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "이전 문항" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "다음 문항" }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "정답 보기" }));
    expect(
      screen.getByRole("button", { name: "정답: md" }),
    ).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "정답: md" }));
    expect(
      await screen.findByRole("button", { name: "정답 보기" }),
    ).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "정답 보기" }));

    await user.click(screen.getByRole("button", { name: "모두보기" }));
    expect(
      screen.queryByRole("button", { name: "정답 보기" }),
    ).not.toBeInTheDocument();
    expect(screen.getByText("정답: md")).toBeInTheDocument();
    expect(screen.getByText("정답: 정답:")).toBeInTheDocument();
    expect(
      screen.queryByText("진행도 (Test Progress)"),
    ).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "순차" }));
    expect(screen.getByRole("button", { name: "무작위" })).toBeInTheDocument();
  });

  it("starts exam timing on entry and reveals the answer only after save", async () => {
    const user = userEvent.setup();
    render(<App />);

    await uploadSampleMarkdown(user);
    await user.click(screen.getByRole("button", { name: "시험보기" }));

    expect(screen.getByText("진행도 (Test Progress)")).toBeInTheDocument();
    expect(screen.getByText("00:00:00")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("답을 입력하세요")).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "정답 보기" }),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("정답: md")).not.toBeInTheDocument();

    await user.type(screen.getByPlaceholderText("답을 입력하세요"), "md");
    await user.click(screen.getByRole("button", { name: "저장" }));

    expect(screen.getByText("정답: md")).toBeInTheDocument();
    expect(screen.getByText("정답입니다")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "이전 문항" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "다음 문항" }),
    ).toBeInTheDocument();
  });

  it("shows raw markdown on double-click without answer edit buttons and grades cleaned answers", async () => {
    const user = userEvent.setup();
    const markdown = "1. 계산 결과는?\n정답: `106.00`";
    const file = new File([markdown], "answer.md", { type: "text/markdown" });

    const { unmount } = render(<App />);

    await user.upload(screen.getByLabelText("md/txt 불러오기"), file);
    await user.click(screen.getByRole("button", { name: /answer\.md/ }));
    await user.click(screen.getByRole("button", { name: "정답 보기" }));
    expect(
      screen.getByRole("button", { name: "정답: 106.00" }),
    ).toBeInTheDocument();

    await user.dblClick(screen.getByRole("button", { name: "정답: 106.00" }));
    expect(screen.getByRole("button", { name: "106.00" })).toBeInTheDocument();
    expect(screen.queryByText("원문: `106.00`")).not.toBeInTheDocument();
    expect(screen.queryByText("원문: 없음")).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "정답 수정" }),
    ).toBeInTheDocument();

    vi.spyOn(window, "prompt").mockReturnValueOnce("107");
    await user.click(screen.getByRole("button", { name: "정답 수정" }));
    expect(
      screen.getByRole("button", { name: "정답: 107" }),
    ).toBeInTheDocument();

    unmount();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /answer\.md/ }));
    await user.click(screen.getByRole("button", { name: "정답 보기" }));
    expect(
      screen.getByRole("button", { name: "정답: 107" }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "시험보기" }));
    await user.type(screen.getByPlaceholderText("답을 입력하세요"), "107");
    await user.click(screen.getByRole("button", { name: "저장" }));

    expect(document.querySelector(".exam-saved-answer")).toHaveTextContent(
      "정답: 107",
    );
    expect(screen.getByText("정답입니다")).toBeInTheDocument();
  });

  it("keeps exam saves as drafts until final submit, then restores submitted result", async () => {
    const user = userEvent.setup();
    const { unmount } = render(<App />);

    await uploadSampleMarkdown(user);
    await user.click(screen.getByRole("button", { name: "시험보기" }));
    await user.type(screen.getByPlaceholderText("답을 입력하세요"), "md");
    await user.click(screen.getByRole("button", { name: "저장" }));
    await user.click(screen.getByRole("button", { name: "통계" }));

    expect(
      screen.getByText("저장된 응시 결과가 없습니다."),
    ).toBeInTheDocument();

    unmount();
    const secondRender = render(<App />);

    await user.click(screen.getByRole("button", { name: /sample\.md/ }));
    await user.click(screen.getByRole("button", { name: "시험보기" }));
    expect(screen.getByPlaceholderText("답을 입력하세요")).toHaveValue("md");
    await user.click(screen.getByRole("button", { name: "다음 문항" }));
    await user.type(screen.getByPlaceholderText("답을 입력하세요"), "정답:");
    await user.click(screen.getByRole("button", { name: "제출 완료" }));

    expect(screen.getByText("정답: 정답:")).toBeInTheDocument();
    expect(screen.getByText("정답입니다")).toBeInTheDocument();

    secondRender.unmount();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /sample\.md/ }));
    await user.click(screen.getByRole("button", { name: "시험보기" }));
    expect(screen.getByText("정답: md")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("답을 입력하세요")).toBeDisabled();
    await user.click(screen.getByRole("button", { name: "통계" }));
    expect(
      screen.queryByText("저장된 응시 결과가 없습니다."),
    ).not.toBeInTheDocument();
  });

  it("starts a new exam round when the refresh button is pressed", async () => {
    const user = userEvent.setup();
    render(<App />);

    await uploadSampleMarkdown(user);
    await user.click(screen.getByRole("button", { name: "시험보기" }));
    await user.type(screen.getByPlaceholderText("답을 입력하세요"), "md");
    await user.click(screen.getByRole("button", { name: "저장" }));
    await user.click(screen.getByRole("button", { name: "새로고침" }));

    expect(screen.getByText("QUESTION 1 / 2")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("답을 입력하세요")).toHaveValue("");
    expect(screen.getByText("00:00:00")).toBeInTheDocument();
  });

  it("switches to the Resend night theme from the moon button", async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByTestId("app-shell")).toHaveAttribute(
      "data-theme",
      "opencode",
    );

    await user.click(
      screen.getByRole("button", { name: "Resend night theme" }),
    );

    expect(screen.getByTestId("app-shell")).toHaveAttribute(
      "data-theme",
      "resend",
    );
  });

  it("seeds doc files when local storage is empty", () => {
    render(<App />);

    expect(screen.getByRole("button", { name: "doc" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /정보처리기사_실기_개념요약본\.md/,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /정보처리기사_실기_주관식_200제\.md/,
      }),
    ).toBeInTheDocument();
    expect(screen.queryByText("샘플 불러오기")).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "샘플 시작" }),
    ).not.toBeInTheDocument();
  });

  it("renders inline and fenced code inside question prompts with code styles", async () => {
    const user = userEvent.setup();
    const markdown =
      "1. `md` 파일을 읽는 코드는?\n```ts\nconst answer = 'md';\n```\n답: md";
    const file = new File([markdown], "code.md", { type: "text/markdown" });
    render(<App />);

    await user.upload(screen.getByLabelText("md/txt 불러오기"), file);
    await user.click(screen.getByRole("button", { name: /code\.md/ }));

    expect(document.querySelector(".question-inline-code")?.textContent).toBe(
      "md",
    );
    expect(document.querySelector(".question-code-block")?.textContent).toBe(
      "const answer = 'md';",
    );
    expect(document.querySelector(".code-token.keyword")?.textContent).toBe(
      "const",
    );
    expect(document.querySelector(".code-token.string")?.textContent).toBe(
      "'md'",
    );
  });

  it("uses the fenced code language for prompt highlighting", async () => {
    const user = userEvent.setup();
    const markdown =
      "1. 다음 Python 코드의 반환값은?\n```python\ndef answer():\n    return True\n```\n답: True";
    const file = new File([markdown], "python.md", {
      type: "text/markdown",
    });
    render(<App />);

    await user.upload(screen.getByLabelText("md/txt 불러오기"), file);

    expect(
      document
        .querySelector(".question-code-block")
        ?.getAttribute("data-language"),
    ).toBe("python");
    expect(document.querySelector(".code-token.keyword")?.textContent).toBe(
      "def",
    );
  });

  it("renders backtick-wrapped answers as inline code", async () => {
    const user = userEvent.setup();
    const markdown = "1. 다음 정답은?\n정답: `1123`";
    const file = new File([markdown], "answer-code.md", {
      type: "text/markdown",
    });
    render(<App />);

    await user.upload(screen.getByLabelText("md/txt 불러오기"), file);
    await user.click(screen.getByRole("button", { name: "정답 보기" }));

    expect(
      screen.getByRole("button", { name: "정답: 1123" }),
    ).toBeInTheDocument();
    expect(
      document.querySelector(".mask.revealed .question-inline-code"),
    ).toHaveTextContent("1123");
  });

  it("grades a backtick-wrapped answer from plain user input", async () => {
    const user = userEvent.setup();
    const markdown = "1. 다음 정답은?\n정답: `123`";
    const file = new File([markdown], "answer-code.md", {
      type: "text/markdown",
    });
    render(<App />);

    await user.upload(screen.getByLabelText("md/txt 불러오기"), file);
    await user.click(screen.getByRole("button", { name: "시험보기" }));
    await user.type(screen.getByPlaceholderText("답을 입력하세요"), "123");
    await user.click(screen.getByRole("button", { name: "저장" }));

    expect(screen.getByText("정답입니다")).toBeInTheDocument();
    expect(screen.getByText("정답:")).toBeInTheDocument();
    expect(
      document.querySelector(".exam-saved-answer .question-inline-code"),
    ).toHaveTextContent("123");
  });
});

async function uploadSampleMarkdown(user: ReturnType<typeof userEvent.setup>) {
  const file = new File(
    [
      "1. 다음 중 STUDY_VIEWER가 기본으로 지원하는 파일은?\n답: md\n\n2. 정답 표시는 어떤 구문으로 감지되는가?\n정답: 정답:",
    ],
    "sample.md",
    { type: "text/markdown" },
  );
  await user.upload(screen.getByLabelText("md/txt 불러오기"), file);
  await user.click(screen.getByRole("button", { name: /sample\.md/ }));
}
