import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { App } from "./App";

describe("Sidebar delete mode", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.spyOn(crypto, "randomUUID").mockReturnValue(
      "00000000-0000-4000-8000-000000000000",
    );
  });

  it("deletes a file from the sidebar delete mode", async () => {
    const user = userEvent.setup();
    const markdown = "1. 삭제될 문제\n답: delete";
    const file = new File([markdown], "delete-me.md", {
      type: "text/markdown",
    });
    render(<App />);

    await user.upload(screen.getByLabelText("md/txt 불러오기"), file);
    expect(
      screen.getByRole("button", { name: /delete-me\.md/ }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Delete" }));
    expect(screen.getByRole("button", { name: "Deleting..." })).toHaveAttribute(
      "aria-pressed",
      "true",
    );

    await user.click(
      screen.getByRole("button", { name: "delete-me.md 파일 삭제" }),
    );

    expect(
      screen.queryByRole("button", { name: /delete-me\.md/ }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByText("파일을 불러오면 문제가 표시됩니다."),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Deleting..." }));
    expect(screen.getByRole("button", { name: "Delete" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
    expect(
      screen.queryByRole("button", { name: "delete-me.md 파일 삭제" }),
    ).not.toBeInTheDocument();
  });

  it("deletes a folder and every file inside it from delete mode", async () => {
    const user = userEvent.setup();
    const markdown = "1. 폴더 삭제 문제\n답: folder";
    const file = new File([markdown], "folder-file.md", {
      type: "text/markdown",
    });
    render(<App />);

    await user.upload(screen.getByLabelText("md/txt 불러오기"), file);
    await user.click(screen.getByRole("button", { name: "Delete" }));
    await user.click(
      screen.getByRole("button", { name: "기본 폴더 폴더 삭제" }),
    );

    expect(
      screen.queryByRole("button", { name: /folder-file\.md/ }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByText("파일을 불러오면 문제가 표시됩니다."),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "기본 폴더" }),
    ).toBeInTheDocument();
  });
});
