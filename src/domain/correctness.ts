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
  const normalizedUser = normalizeAnswer(userAnswer);
  return (
    normalizedUser.length > 0 &&
    normalizedUser === normalizeAnswer(correctAnswer)
  );
}
