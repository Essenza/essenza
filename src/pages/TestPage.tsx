// src/pages/TestPage.tsx
import { useState } from "react";
import { questions } from "../data/questions";
import { calculateScores } from "../logic/scoreEngine";
import { calculateProfile } from "../logic/profileEngine";
import type { ProfileScores } from "../logic/scoreEngine";
import type { TestResult } from "../logic/profileEngine";

type Props = {
  onFinish: (result: TestResult) => void;
};

export default function TestPage({ onFinish }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionIds, setSelectedOptionIds] = useState<string[]>([]);

  const question = questions[currentIndex];

  function handleAnswer(optionId: string) {
    const updatedSelections = [...selectedOptionIds, optionId];

    // Última pregunta → calcular resultado
    if (currentIndex === questions.length - 1) {
      const scores: ProfileScores = calculateScores(
        updatedSelections,
        questions
      );

      const result = calculateProfile(scores);

      onFinish(result);
      return;
    }

    setSelectedOptionIds(updatedSelections);
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <main className="test">
      <small>
        Pregunta {currentIndex + 1} de {questions.length}
      </small>

      <div className="test-progress">
        <span
          style={{
            width: `${((currentIndex + 1) / questions.length) * 100}%`
          }}
        />
      </div>

      <h2>{question.text}</h2>

      <div className="test-options">
        {question.options.map(option => (
          <button
            key={option.id}
            className="test-option"
            onClick={() => handleAnswer(option.id)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </main>
  );
}
