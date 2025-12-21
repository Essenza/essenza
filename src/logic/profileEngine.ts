// src/logic/profileEngine.ts
import { perfumes } from "../data/perfumes";
import type { Perfume } from "../types/perfume";

export type ProfileScores = {
  fresco: number;
  intenso: number;
  elegante: number;
  calido: number;
  misterioso: number;
};

export type TestResult = {
  principal: Perfume | null;
  secundarios: Perfume[];
};

/**
 * userScores viene DIRECTAMENTE del test
 * (suma de scores de las preguntas)
 */
export function calculateProfile(userScores: ProfileScores): TestResult {
  const entries = Object.entries(userScores);

  // 1️⃣ Calcular score total (para detectar casos raros)
  const totalScore = entries.reduce((sum, [, value]) => sum + value, 0);

  let winningProfile: string;

  // 2️⃣ FALLBACK si todas las respuestas suman 0
  if (totalScore === 0) {
    // Perfil neutro por defecto (seguro en UX)
    winningProfile = "elegante";
  } else {
    // Perfil ganador normal
    const sortedProfiles = entries.sort((a, b) => b[1] - a[1]);
    winningProfile = sortedProfiles[0][0];
  }

  // 3️⃣ Filtrar perfumes del perfil ganador
  let candidates = perfumes.filter(
    p => p.profileId === winningProfile
  );

  // 4️⃣ FALLBACK extra: si ese perfil no tiene perfumes
  if (candidates.length === 0) {
    candidates = perfumes;
  }

  // 5️⃣ Desempate inteligente / rotación
  const rotation = totalScore % candidates.length;

  const ordered = [
    ...candidates.slice(rotation),
    ...candidates.slice(0, rotation)
  ];

  // 6️⃣ Resultado final GARANTIZADO
  return {
    principal: ordered[0],
    secundarios: ordered.slice(1, 3)
  };
}
