const parentheticalPattern = /\(([^()]*)\)|（([^（）]*)）/gu;
const listDelimiterPattern = /[\s,，、→⇒]+|[-=]+>/gu;

export function normalizeAnswer(value: string): string {
  return value
    .normalize("NFC")
    .trim()
    .replace(/^[\s.,;:!?。、，]+|[\s.,;:!?。、，]+$/gu, "")
    .replace(/\s+/gu, " ")
    .toLocaleLowerCase("ko-KR");
}

export function checkCorrectness(
  userAnswer: string,
  correctAnswer: string | null,
): boolean {
  if (correctAnswer === null) return false;
  const normalizedUser = compactAnswer(userAnswer);
  return (
    normalizedUser.length > 0 &&
    answerCandidates(correctAnswer).includes(normalizedUser)
  );
}

function compactAnswer(value: string): string {
  return normalizeAnswer(value).replace(listDelimiterPattern, "");
}

function answerCandidates(correctAnswer: string): readonly string[] {
  return uniqueCompactAnswers([
    correctAnswer,
    removeParentheticals(correctAnswer),
    ...extractParentheticalAliases(correctAnswer),
  ]);
}

function removeParentheticals(value: string): string {
  return value.replace(parentheticalPattern, " ").trim();
}

function extractParentheticalAliases(value: string): readonly string[] {
  const aliases: string[] = [];
  for (const match of value.matchAll(parentheticalPattern)) {
    const content = match[1] ?? match[2] ?? "";
    const alias = content.trim();
    if (alias.length > 0) aliases.push(alias);
  }
  return aliases;
}

function uniqueCompactAnswers(values: readonly string[]): readonly string[] {
  const answers: string[] = [];
  const seen = new Set<string>();
  for (const value of values) {
    const compacted = compactAnswer(value);
    if (compacted.length === 0 || seen.has(compacted)) continue;
    seen.add(compacted);
    answers.push(compacted);
  }
  return answers;
}
