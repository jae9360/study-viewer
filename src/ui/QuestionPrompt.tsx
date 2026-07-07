import type { ReactNode } from "react";

type PromptSegment =
  | { readonly id: string; readonly kind: "text"; readonly value: string }
  | {
      readonly id: string;
      readonly kind: "codeBlock";
      readonly language: CodeLanguage;
      readonly value: string;
    };

type CodeLanguage =
  | "css"
  | "html"
  | "java"
  | "javascript"
  | "json"
  | "kotlin"
  | "markdown"
  | "plaintext"
  | "python"
  | "sql"
  | "typescript";

export function QuestionPrompt({ text }: { readonly text: string }) {
  return (
    <div className="question-prompt">
      {parsePrompt(text).map((segment) =>
        segment.kind === "codeBlock" ? (
          <pre
            className="question-code-block"
            data-language={segment.language}
            key={segment.id}
          >
            <code>
              {renderHighlightedCode(
                segment.value,
                segment.id,
                segment.language,
              )}
            </code>
          </pre>
        ) : (
          <p key={segment.id}>{renderInlineCode(segment.value, segment.id)}</p>
        ),
      )}
    </div>
  );
}

export function InlineCodeText({ text }: { readonly text: string }) {
  return <>{renderInlineCode(text, "inline")}</>;
}

function parsePrompt(text: string): readonly PromptSegment[] {
  const segments: PromptSegment[] = [];
  const textLines: string[] = [];
  const codeLines: string[] = [];
  let codeLanguage: CodeLanguage = "plaintext";
  let inCodeBlock = false;

  for (const line of text.split("\n")) {
    const fenceLanguage = parseFenceLanguage(line);
    if (fenceLanguage !== null) {
      if (inCodeBlock) {
        segments.push({
          id: `code-${segments.length}-${codeLines.join("\n").length}`,
          kind: "codeBlock",
          language: codeLanguage,
          value: codeLines.join("\n"),
        });
        codeLines.length = 0;
        codeLanguage = "plaintext";
        inCodeBlock = false;
        continue;
      }
      flushTextSegment(segments, textLines);
      codeLanguage = fenceLanguage;
      inCodeBlock = true;
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }
    textLines.push(line);
  }

  if (inCodeBlock) {
    segments.push({
      id: `code-${segments.length}-${codeLines.join("\n").length}`,
      kind: "codeBlock",
      language: codeLanguage,
      value: codeLines.join("\n"),
    });
  }
  flushTextSegment(segments, textLines);
  return segments.length > 0
    ? segments
    : [{ id: `text-empty-${text.length}`, kind: "text", value: text }];
}

function flushTextSegment(
  segments: PromptSegment[],
  textLines: string[],
): void {
  if (textLines.length === 0) return;
  const value = textLines.join("\n").trim();
  textLines.length = 0;
  if (value.length === 0) return;
  segments.push({
    id: `text-${segments.length}-${value.length}`,
    kind: "text",
    value,
  });
}

function renderInlineCode(text: string, prefix: string): readonly ReactNode[] {
  const nodes: ReactNode[] = [];
  let rest = text;
  let key = 0;

  while (rest.length > 0) {
    const start = rest.indexOf("`");
    if (start < 0) {
      nodes.push(rest);
      break;
    }
    const before = rest.slice(0, start);
    if (before.length > 0) nodes.push(before);
    const afterStart = rest.slice(start + 1);
    const end = afterStart.indexOf("`");
    if (end < 0) {
      nodes.push(rest.slice(start));
      break;
    }
    const code = afterStart.slice(0, end);
    nodes.push(
      <code className="question-inline-code" key={`code-${prefix}-${key}`}>
        {code}
      </code>,
    );
    key += 1;
    rest = afterStart.slice(end + 1);
  }

  return nodes;
}

function renderHighlightedCode(
  code: string,
  prefix: string,
  language: CodeLanguage,
): readonly ReactNode[] {
  const nodes: ReactNode[] = [];
  let position = 0;
  const tokenPattern = buildTokenPattern(language);

  for (const match of code.matchAll(tokenPattern)) {
    const token = match[0];
    const index = match.index;
    if (index > position) nodes.push(code.slice(position, index));
    nodes.push(
      <span
        className={`code-token ${tokenClassName(token, language)}`}
        key={`${prefix}-${index}`}
      >
        {token}
      </span>,
    );
    position = index + token.length;
  }

  if (position < code.length) nodes.push(code.slice(position));
  return nodes;
}

function parseFenceLanguage(line: string): CodeLanguage | null {
  const match = /^\s*```(?<language>[a-z0-9_-]*)/iu.exec(line);
  if (match === null) return null;
  return normalizeLanguage(match.groups?.language ?? "");
}

function normalizeLanguage(value: string): CodeLanguage {
  const normalized = value.toLowerCase();
  if (normalized === "js" || normalized === "jsx") return "javascript";
  if (normalized === "ts" || normalized === "tsx") return "typescript";
  if (normalized === "py") return "python";
  if (normalized === "kt") return "kotlin";
  if (normalized === "md") return "markdown";
  if (normalized === "htm") return "html";
  if (
    normalized === "css" ||
    normalized === "html" ||
    normalized === "java" ||
    normalized === "json" ||
    normalized === "kotlin" ||
    normalized === "markdown" ||
    normalized === "python" ||
    normalized === "sql" ||
    normalized === "typescript"
  ) {
    return normalized;
  }
  return "plaintext";
}

function buildTokenPattern(language: CodeLanguage): RegExp {
  const keywords = keywordPattern(language);
  return new RegExp(
    [
      /#.*/u.source,
      /--.*/u.source,
      /\/\/.*/u.source,
      /"(?:\\.|[^"\\])*"/u.source,
      /'(?:\\.|[^'\\])*'/u.source,
      /`(?:\\.|[^`\\])*`/u.source,
      keywords,
      /\b\d+(?:\.\d+)?\b/u.source,
    ]
      .filter((part) => part.length > 0)
      .join("|"),
    "gu",
  );
}

function keywordPattern(language: CodeLanguage): string {
  const keywords: Readonly<Record<CodeLanguage, readonly string[]>> = {
    css: [
      "align-items",
      "background",
      "border",
      "color",
      "display",
      "font",
      "grid",
      "margin",
      "padding",
    ],
    html: [
      "article",
      "body",
      "button",
      "div",
      "footer",
      "head",
      "header",
      "html",
      "main",
      "section",
    ],
    java: [
      "boolean",
      "class",
      "else",
      "false",
      "final",
      "if",
      "import",
      "new",
      "null",
      "private",
      "public",
      "return",
      "static",
      "true",
      "void",
    ],
    javascript: [
      "async",
      "await",
      "class",
      "const",
      "else",
      "export",
      "false",
      "from",
      "function",
      "if",
      "import",
      "let",
      "new",
      "null",
      "return",
      "true",
      "undefined",
      "var",
      "while",
    ],
    json: ["false", "null", "true"],
    kotlin: [
      "class",
      "data",
      "else",
      "false",
      "fun",
      "if",
      "import",
      "null",
      "object",
      "return",
      "true",
      "val",
      "var",
      "when",
    ],
    markdown: [],
    plaintext: [],
    python: [
      "and",
      "as",
      "class",
      "def",
      "elif",
      "else",
      "False",
      "for",
      "from",
      "if",
      "import",
      "in",
      "is",
      "None",
      "not",
      "or",
      "return",
      "True",
      "while",
    ],
    sql: [
      "and",
      "as",
      "by",
      "case",
      "create",
      "delete",
      "from",
      "group",
      "insert",
      "into",
      "join",
      "left",
      "limit",
      "order",
      "right",
      "select",
      "table",
      "update",
      "values",
      "where",
    ],
    typescript: [
      "async",
      "await",
      "class",
      "const",
      "else",
      "export",
      "false",
      "from",
      "function",
      "if",
      "import",
      "interface",
      "let",
      "new",
      "null",
      "return",
      "true",
      "type",
      "undefined",
      "var",
      "while",
    ],
  };
  const source = keywords[language].join("|");
  return source.length === 0 ? "" : `\\b(?:${source})\\b`;
}

function tokenClassName(token: string, language: CodeLanguage): string {
  if (
    token.startsWith("//") ||
    token.startsWith("#") ||
    token.startsWith("--")
  ) {
    return "comment";
  }
  if (token.startsWith('"') || token.startsWith("'") || token.startsWith("`")) {
    return "string";
  }
  if (/^\d/u.test(token)) return "number";
  if (language === "css" && token.includes("-")) return "property";
  if (language === "html") return "tag";
  return "keyword";
}
