export type AnswerOption = {
  id: string;
  text: string;
  scores: Record<string, number>;
};

export type Question = {
  id: string;
  text: string;
  options: AnswerOption[];
};
