import { cleanAnswer } from "./answerText";

export function displayAnswer(
  answer: string,
  rawAnswer: string | null,
): string {
  if (rawAnswer?.includes("`") === true && cleanAnswer(rawAnswer) === answer)
    return rawAnswer;
  return answer;
}
