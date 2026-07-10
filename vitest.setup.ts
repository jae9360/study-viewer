import "@testing-library/jest-dom/vitest";
import { beforeEach, vi } from "vitest";

vi.spyOn(window, "alert").mockImplementation(() => undefined);

beforeEach(() => {
  vi.clearAllMocks();
});
