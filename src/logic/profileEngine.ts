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
  // 1️⃣ Determinar perfil ganador
  const sortedProfiles = Object.entries(userScores)
    .sort((a, b) => b[1] - a[1]);

  const winningProfile = sortedProfiles[0]?.[0];

  if (!winningProfile) {
    return { principal: null, secundarios: [] };
  }

  // 2️⃣ Filtrar perfumes de ese perfil
  const candidates = perfumes.filter(
    p => p.profileId === winningProfile
  );

  if (candidates.length === 0) {
    return { principal: null, secundarios: [] };
  }

  // 3️⃣ DESEMPATE INTELIGENTE (NO SIEMPRE EL PRIMERO)
  // usamos la "forma" de las respuestas para rotar la lista
  const profileStrength = sortedProfiles[0][1];
  const rotation = profileStrength % candidates.length;

  const ordered = [
    ...candidates.slice(rotation),
    ...candidates.slice(0, rotation)
  ];

  // 4️⃣ Resultado final
  return {
    principal: ordered[0],
    secundarios: ordered.slice(1, 3)
  };
}
