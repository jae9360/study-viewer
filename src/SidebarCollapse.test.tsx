import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { App } from "./App";

describe("Sidebar collapse", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.spyOn(crypto, "randomUUID").mockReturnValue(
      "00000000-0000-4000-8000-000000000000",
    );
  });

  it("collapses and expands the sidebar without losing file navigation", async () => {
    const user = userEvent.setup();
    render(<App />);

    const sidebar = screen.getByRole("complementary", { name: "Sidebar" });
    expect(sidebar).not.toHaveClass("collapsed");

    await user.click(screen.getByRole("button", { name: "사이드바 접기" }));
    expect(sidebar).toHaveClass("collapsed");
    expect(
      screen.getByRole("button", { name: "사이드바 펼치기" }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "사이드바 펼치기" }));
    expect(sidebar).not.toHaveClass("collapsed");
    expect(
      screen.getByRole("button", {
        name: /정보처리기사_실기_개념요약본\.md/,
      }),
    ).toBeInTheDocument();
  });

  it("keeps the mobile file list collapsed until the summary is opened", async () => {
    const user = userEvent.setup();
    render(<App />);

    const sidebar = screen.getByRole("complementary", { name: "Sidebar" });
    expect(sidebar).not.toHaveClass("mobile-expanded");

    const mobileSummary = screen.getByRole("button", {
      name: "파일 메뉴 펼치기",
    });
    expect(mobileSummary).toHaveAttribute("aria-expanded", "false");

    await user.click(mobileSummary);

    expect(sidebar).toHaveClass("mobile-expanded");
    expect(
      screen.getByRole("button", { name: "파일 메뉴 접기" }),
    ).toHaveAttribute("aria-expanded", "true");
  });
});
