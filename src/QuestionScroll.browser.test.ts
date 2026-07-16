import { type Browser, chromium } from "playwright";
import { createServer, type ViteDevServer } from "vite";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

describe("question panel scroll", () => {
  let server: ViteDevServer;
  let browser: Browser;
  let baseUrl = "";

  beforeAll(async () => {
    server = await createServer({
      configFile: "vite.config.ts",
      server: { host: "127.0.0.1" },
    });
    await server.listen(0);
    const firstUrl = server.resolvedUrls?.local[0];
    if (firstUrl === undefined) throw new Error("Vite did not expose a URL");
    baseUrl = firstUrl;
    browser = await chromium.launch({ headless: true });
  });

  afterAll(async () => {
    await browser.close();
    await server.close();
  });

  it("keeps long exam questions scrollable when the answer footer is visible", async () => {
    const page = await browser.newPage({
      viewport: { width: 1280, height: 720 },
    });
    const prompt = Array.from(
      { length: 80 },
      (_, index) =>
        `${index + 1}. 스크롤 검증용 긴 문장입니다. 답안 작성 영역이 아래에 있어도 문항 영역 자체가 스크롤되어야 합니다.`,
    ).join("\n");

    await page.goto(baseUrl);
    await page.evaluate((content) => {
      const input = document.querySelector('input[type="file"]');
      if (!(input instanceof HTMLInputElement))
        throw new Error("File input is missing");
      const files = new DataTransfer();
      files.items.add(
        new File([content], "scroll-test.md", { type: "text/markdown" }),
      );
      input.files = files.files;
      input.dispatchEvent(new Event("change", { bubbles: true }));
    }, `1. ${prompt}\n답: ok`);
    await page.getByRole("button", { name: /scroll-test\.md/ }).click();
    await page.getByRole("button", { name: "시험보기" }).click();

    const metrics = await page
      .locator(".question-scroll")
      .evaluate((element) => {
        element.scrollTop = 600;
        return {
          clientHeight: element.clientHeight,
          scrollHeight: element.scrollHeight,
          scrollTop: element.scrollTop,
        };
      });

    expect(metrics.scrollHeight).toBeGreaterThan(metrics.clientHeight);
    expect(metrics.scrollTop).toBeGreaterThan(0);

    await page.close();
  }, 15000);
});
