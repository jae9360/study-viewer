import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { App } from "./App";

describe("exam auto advance", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.spyOn(crypto, "randomUUID").mockReturnValue(
      "00000000-0000-4000-8000-000000000000",
    );
  });

  it("saves with Enter and moves to the next question when the answer is correct", async () => {
    const user = userEvent.setup();
    render(<App />);

    await uploadTwoQuestionMarkdown(user);
    await user.click(screen.getByRole("button", { name: "시험보기" }));

    await user.type(screen.getByPlaceholderText("답을 입력하세요"), "md");
    await user.keyboard("{Enter}");

    expect(screen.getByText("QUESTION 2 / 2")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("답을 입력하세요")).toHaveValue("");
  });

  it("moves between questions with arrow keys", async () => {
    const user = userEvent.setup();
    render(<App />);

    await uploadTwoQuestionMarkdown(user);
    await user.click(screen.getByRole("button", { name: "시험보기" }));

    await user.keyboard("{ArrowRight}");
    expect(screen.getByText("QUESTION 2 / 2")).toBeInTheDocument();

    await user.keyboard("{ArrowLeft}");
    expect(screen.getByText("QUESTION 1 / 2")).toBeInTheDocument();
  });

  it("keeps the last exam question when returning to exam view", async () => {
    const user = userEvent.setup();
    render(<App />);

    await uploadTwoQuestionMarkdown(user);
    await user.click(screen.getByRole("button", { name: "시험보기" }));
    await user.keyboard("{ArrowRight}");
    expect(screen.getByText("QUESTION 2 / 2")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "단건보기" }));
    expect(screen.getByText("QUESTION 1 / 2")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "시험보기" }));
    expect(screen.getByText("QUESTION 2 / 2")).toBeInTheDocument();
  });

  it("shows correct and failed question pickers that jump to the selected question", async () => {
    const user = userEvent.setup();
    render(<App />);

    await uploadTwoQuestionMarkdown(user);
    await user.click(screen.getByRole("button", { name: "시험보기" }));

    await user.type(screen.getByPlaceholderText("답을 입력하세요"), "md");
    await user.keyboard("{Enter}");
    await user.type(screen.getByPlaceholderText("답을 입력하세요"), "wrong");
    await user.click(screen.getByRole("button", { name: "저장" }));

    const progressStrip = screen.getByRole("region", {
      name: "시험 진행도",
    });
    const correctPicker =
      within(progressStrip).getByLabelText("정답 문항 이동");
    const failedPicker = within(progressStrip).getByLabelText("오답 문항 이동");
    const orderButton = within(progressStrip).getByRole("button", {
      name: "순차",
    });
    const progressBar = within(progressStrip).getByRole("progressbar");
    const resetButton = within(progressStrip).getByRole("button", {
      name: "새로고침",
    });
    const timer = within(progressStrip).getByText("00:00:00");

    expect(within(progressStrip).getByText("정답 수")).toBeInTheDocument();
    expect(within(progressStrip).getByText("오답 수")).toBeInTheDocument();
    expect(within(progressStrip).getByText("진행도")).toBeInTheDocument();
    expect(correctPicker).toHaveDisplayValue("1 / 2");
    expect(failedPicker).toHaveDisplayValue("1 / 2");
    expectBefore(correctPicker, failedPicker);
    expectBefore(failedPicker, orderButton);
    expectBefore(orderButton, progressBar);
    expectBefore(progressBar, resetButton);
    expectBefore(resetButton, timer);

    await user.selectOptions(screen.getByLabelText("정답 문항 이동"), "0");
    expect(screen.getByText("QUESTION 1 / 2")).toBeInTheDocument();

    await user.selectOptions(screen.getByLabelText("오답 문항 이동"), "1");
    expect(screen.getByText("QUESTION 2 / 2")).toBeInTheDocument();
  });

  it("copies the displayed correct answer in exam view", async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    render(<App />);

    await uploadTwoQuestionMarkdown(user);
    await user.click(screen.getByRole("button", { name: "시험보기" }));
    await user.type(screen.getByPlaceholderText("답을 입력하세요"), "wrong");
    await user.click(screen.getByRole("button", { name: "저장" }));
    await user.click(screen.getByRole("button", { name: "정답 복사" }));

    expect(writeText).toHaveBeenCalledWith("md");
  });

  it("submits with an alert when saving the last question by Enter", async () => {
    const user = userEvent.setup();
    render(<App />);

    await uploadTwoQuestionMarkdown(user);
    await user.click(screen.getByRole("button", { name: "시험보기" }));
    await user.keyboard("{ArrowRight}");
    await user.type(screen.getByPlaceholderText("답을 입력하세요"), "정답:");
    await user.keyboard("{Enter}");

    expect(window.alert).toHaveBeenCalledWith("저장되었습니다.");
    expect(screen.getByPlaceholderText("답을 입력하세요")).toBeDisabled();
    expect(screen.getByText("정답: 정답:")).toBeInTheDocument();
  });

  it("submits with an alert when saving the last question by button", async () => {
    const user = userEvent.setup();
    render(<App />);

    await uploadTwoQuestionMarkdown(user);
    await user.click(screen.getByRole("button", { name: "시험보기" }));
    await user.keyboard("{ArrowRight}");
    await user.type(screen.getByPlaceholderText("답을 입력하세요"), "정답:");
    await user.click(screen.getByRole("button", { name: "저장" }));

    expect(window.alert).toHaveBeenCalledWith("저장되었습니다.");
    expect(screen.getByPlaceholderText("답을 입력하세요")).toBeDisabled();
    expect(screen.getByText("정답: 정답:")).toBeInTheDocument();
  });

  it("blocks submitting an already submitted exam", async () => {
    const user = userEvent.setup();
    render(<App />);

    await uploadTwoQuestionMarkdown(user);
    await user.click(screen.getByRole("button", { name: "시험보기" }));
    await user.keyboard("{ArrowRight}");
    await user.type(screen.getByPlaceholderText("답을 입력하세요"), "정답:");
    await user.click(screen.getByRole("button", { name: "제출 완료" }));
    expect(window.alert).toHaveBeenLastCalledWith("저장되었습니다.");

    await user.click(screen.getByRole("button", { name: "제출 완료" }));

    expect(window.alert).toHaveBeenLastCalledWith(
      "이미 제출 완료된 데이터입니다",
    );
    const stored = JSON.parse(
      localStorage.getItem("STUDY_VIEWER_LIBRARY_V1") ?? "{}",
    ) as { readonly attempts?: readonly unknown[] };
    expect(stored.attempts).toHaveLength(1);
  });

  it("collapses the exam chrome from the mobile toggle", async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);

    await uploadTwoQuestionMarkdown(user);
    await user.click(screen.getByRole("button", { name: "시험보기" }));

    const shell = container.querySelector(".app-shell");
    const progressStrip = screen.getByRole("region", {
      name: "시험 진행도",
    });

    expect(shell).not.toHaveClass("exam-chrome-collapsed");
    expect(progressStrip).not.toHaveClass("compact");
    expect(
      screen.queryByRole("button", { name: "상단 메뉴 접기" }),
    ).not.toBeInTheDocument();
    expect(
      screen
        .getByRole("button", { name: "모바일 상단 메뉴 접기" })
        .querySelector("path"),
    ).toHaveAttribute("d", "m6 15 6-6 6 6");

    await user.click(
      screen.getByRole("button", { name: "모바일 상단 메뉴 접기" }),
    );

    expect(shell).toHaveClass("exam-chrome-collapsed");
    expect(progressStrip).toHaveClass("compact");
    expect(
      screen
        .getByRole("button", { name: "모바일 상단 메뉴 펼치기" })
        .querySelector("path"),
    ).toHaveAttribute("d", "m6 9 6 6 6-6");

    await user.click(
      screen.getByRole("button", { name: "모바일 상단 메뉴 펼치기" }),
    );

    expect(shell).not.toHaveClass("exam-chrome-collapsed");
    expect(progressStrip).not.toHaveClass("compact");
    expect(
      screen
        .getByRole("button", { name: "모바일 상단 메뉴 접기" })
        .querySelector("path"),
    ).toHaveAttribute("d", "m6 15 6-6 6 6");
  });
});

async function uploadTwoQuestionMarkdown(
  user: ReturnType<typeof userEvent.setup>,
) {
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

function expectBefore(first: Element, second: Element): void {
  expect(
    first.compareDocumentPosition(second) & Node.DOCUMENT_POSITION_FOLLOWING,
  ).toBeTruthy();
}
