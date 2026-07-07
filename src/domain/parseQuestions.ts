import type { Question } from "../app/types";
import { cleanAnswer } from "./answerText";

const answerLine = /^\s*(답|정답)\s*[:：]\s*(.+?)\s*$/u;
const blockStart = /^\s*(?:#{1,3}\s*)?(?:문제\s*)?(?:Q\s*)?\d+[.)번]?\s*/iu;

type Draft = {
  readonly prompt: string;
  readonly rawAnswer: string | null;
  readonly answer: string | null;
};

export function parseQuestions(text: string): readonly Question[] {
  const normalized = text.replace(/\r\n?/gu, "\n").trim();
  if (normalized.length === 0) return [];

  const tableRows = parseByMarkdownTable(normalized);
  const markerBlocks = parseByAnswerMarkers(normalized);
  const drafts =
    tableRows.length > 0
      ? tableRows
      : markerBlocks.length > 0
        ? markerBlocks
        : parseByNumberedBlocks(normalized);

  return drafts
    .filter((draft) => draft.prompt.length > 0 || draft.answer !== null)
    .map((draft, index) => ({
      id: `q_${index + 1}`,
      index: index + 1,
      prompt: draft.prompt.length > 0 ? draft.prompt : "문제 내용 없음",
      rawAnswer: draft.rawAnswer,
      answer: draft.answer,
    }));
}

function parseByMarkdownTable(text: string): readonly Draft[] {
  const lines = text.split("\n");
  const drafts: Draft[] = [];

  for (let index = 0; index < lines.length - 1; index += 1) {
    const headers = splitTableRow(lines[index] ?? "");
    if (headers.length === 0 || !isTableSeparator(lines[index + 1] ?? ""))
      continue;

    const answerIndex = headers.indexOf("정답");
    if (answerIndex < 0) continue;

    const numberIndex = headers.indexOf("번호");
    for (let rowIndex = index + 2; rowIndex < lines.length; rowIndex += 1) {
      const cells = splitTableRow(lines[rowIndex] ?? "");
      if (cells.length === 0) break;
      const rawAnswer = cells[answerIndex]?.trim();
      if (rawAnswer === undefined || rawAnswer.length === 0) continue;
      drafts.push({
        prompt: buildTablePrompt(headers, cells, answerIndex, numberIndex),
        rawAnswer,
        answer: cleanAnswer(rawAnswer),
      });
    }
  }

  return drafts;
}

function buildTablePrompt(
  headers: readonly string[],
  cells: readonly string[],
  answerIndex: number,
  numberIndex: number,
): string {
  return headers
    .flatMap((header, index) => {
      if (index === answerIndex || index === numberIndex) return [];
      const cell = cells[index]?.trim() ?? "";
      if (cell.length === 0) return [];
      return `${header}: ${cell}`;
    })
    .join("\n");
}

function splitTableRow(line: string): readonly string[] {
  const trimmed = line.trim();
  if (!trimmed.startsWith("|") || !trimmed.endsWith("|")) return [];
  return trimmed
    .slice(1, -1)
    .split("|")
    .map((cell) => cell.trim());
}

function isTableSeparator(line: string): boolean {
  const cells = splitTableRow(line);
  return (
    cells.length > 0 &&
    cells.every((cell) => /^:?-{3,}:?$/u.test(cell.replace(/\s/gu, "")))
  );
}

function parseByAnswerMarkers(text: string): readonly Draft[] {
  const lines = text.split("\n");
  const drafts: Draft[] = [];
  let current: string[] = [];

  for (const line of lines) {
    const match = answerLine.exec(line);
    if (match !== null) {
      const rawAnswer = match[2]?.trim() ?? "";
      drafts.push({
        prompt: cleanPrompt(current.join("\n")),
        rawAnswer,
        answer: cleanAnswer(rawAnswer),
      });
      current = [];
      continue;
    }
    current.push(line);
  }

  const tail = cleanPrompt(current.join("\n"));
  if (tail.length > 0 && drafts.length === 0) return [];
  if (tail.length > 0)
    drafts.push({ prompt: tail, rawAnswer: null, answer: null });
  return drafts;
}

function parseByNumberedBlocks(text: string): readonly Draft[] {
  const blocks: string[] = [];
  let current: string[] = [];

  for (const line of text.split("\n")) {
    if (blockStart.test(line) && current.length > 0) {
      blocks.push(current.join("\n"));
      current = [];
    }
    current.push(line);
  }

  if (current.length > 0) blocks.push(current.join("\n"));
  return blocks.map((block) => extractAnswer(block));
}

function extractAnswer(block: string): Draft {
  const promptLines: string[] = [];
  let rawAnswer: string | null = null;
  let answer: string | null = null;
  for (const line of block.split("\n")) {
    const match = answerLine.exec(line);
    if (match !== null) {
      rawAnswer = match[2]?.trim() ?? "";
      answer = cleanAnswer(rawAnswer);
      continue;
    }
    promptLines.push(line);
  }
  return { prompt: cleanPrompt(promptLines.join("\n")), rawAnswer, answer };
}

function cleanPrompt(value: string): string {
  return value
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .trim();
}
