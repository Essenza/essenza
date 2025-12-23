// src/logic/scoreEngine.ts
import type { Question } from "../types/question";

export type ProfileScores = Record<string, number>;

export function calculateScores(
  selectedOptionIds: string[],
  questions: Question[]
): ProfileScores {
  const scores: ProfileScores = {};

  for (const question of questions) {
    for (const option of question.options) {
      if (selectedOptionIds.includes(option.id)) {
        for (const [profileId, value] of Object.entries(option.scores)) {
          if (scores[profileId] === undefined) {
            scores[profileId] = 0;
          }
          scores[profileId] += value;
        }
      }
    }
  }

  return scores;
}
