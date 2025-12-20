// src/logic/scoreEngine.ts
import type { Question } from "../types/question";

export type ProfileScores = {
  fresco: number;
  intenso: number;
  elegante: number;
  calido: number;
  misterioso: number;
};

const EMPTY_SCORES: ProfileScores = {
  fresco: 0,
  intenso: 0,
  elegante: 0,
  calido: 0,
  misterioso: 0
};

export function calculateScores(
  selectedOptionIds: string[],
  questions: Question[]
): ProfileScores {
  const scores: ProfileScores = { ...EMPTY_SCORES };

  for (const question of questions) {
    for (const option of question.options) {
      if (selectedOptionIds.includes(option.id)) {
        for (const [profileId, value] of Object.entries(option.scores)) {
          scores[profileId as keyof ProfileScores] += value;
        }
      }
    }
  }

  return scores;
}
