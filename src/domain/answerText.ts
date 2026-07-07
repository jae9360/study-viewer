export function cleanAnswer(rawAnswer: string): string {
  let answer = rawAnswer.trim();
  while (true) {
    const stripped = stripMarkdownWrapper(answer).trim();
    if (stripped === answer) return answer;
    answer = stripped;
  }
}

function stripMarkdownWrapper(value: string): string {
  const code = /^(?<ticks>`+)(?<content>[\s\S]+)\k<ticks>$/u.exec(value);
  if (code?.groups?.content !== undefined) return code.groups.content;

  const bold = /^\*\*([\s\S]+)\*\*$/u.exec(value);
  if (bold?.[1] !== undefined) return bold[1];

  const italicStar = /^\*([^*]+)\*$/u.exec(value);
  if (italicStar?.[1] !== undefined) return italicStar[1];

  const italicUnderscore = /^_([^_]+)_$/u.exec(value);
  if (italicUnderscore?.[1] !== undefined) return italicUnderscore[1];

  return value;
}
