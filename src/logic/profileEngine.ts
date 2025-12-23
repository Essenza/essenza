// src/logic/profileEngine.ts
import type { Perfume } from "../types/perfume";
import { perfumes as hombrePerfumes } from "../data/hombre/perfumes";
import { perfumes as mujerPerfumes } from "../data/mujer/perfumes";

export type ProfileScores = Record<string, number>;

export type TestResult = {
  principal: Perfume | null;
  secundarios: Perfume[];
};

type TimeContext = "dia" | "noche" | "mixto";

/* =========================
   CONFIGURACIÓN
   ========================= */

const MAIN_PERFUME_BY_PROFILE: Record<
  "hombre" | "mujer",
  Record<string, string>
> = {
  hombre: {
    fresco: "najdia",
    elegante: "cdn-milestone",
    intenso: "asad",
    misterioso: "khamrah",
  },
  mujer: {
    elegante: "ana-abiyedh-white",
    magnetica: "mayar-cherry-intense",
    intensa: "yara",
  },
};

const TIE_BREAK_ORDER: Record<"hombre" | "mujer", string[]> = {
  hombre: ["elegante", "misterioso", "intenso", "fresco"],
  mujer: ["magnetica", "intensa", "elegante"],
};

/* =========================
   UTILIDADES
   ========================= */

function getGender(): "hombre" | "mujer" {
  return localStorage.getItem("gender") === "mujer" ? "mujer" : "hombre";
}

function withResolvedImage(
  perfume: Perfume,
  gender: "hombre" | "mujer"
): Perfume {
  return {
    ...perfume,
    imageUrl: `/images/${gender}/${perfume.id}.jpg`,
  };
}

function getWinningProfile(
  scores: ProfileScores,
  gender: "hombre" | "mujer"
): string {
  const entries = Object.entries(scores);
  if (!entries.length) return "";

  const max = Math.max(...entries.map(([, v]) => v));
  const tied = entries.filter(([, v]) => v === max).map(([k]) => k);

  if (tied.length === 1) return tied[0];

  for (const p of TIE_BREAK_ORDER[gender]) {
    if (tied.includes(p)) return p;
  }

  return tied.sort()[0];
}

/* =========================
   DÍA / NOCHE
   ========================= */

function getTimeContext(scores: ProfileScores): TimeContext {
  const dayProfiles = ["fresco", "elegante"];
  const nightProfiles = ["intenso", "misterioso", "magnetica"];

  let day = 0;
  let night = 0;

  for (const [profile, value] of Object.entries(scores)) {
    if (dayProfiles.includes(profile)) day += value;
    if (nightProfiles.includes(profile)) night += value;
  }

  if (day > night * 1.2) return "dia";
  if (night > day * 1.2) return "noche";
  return "mixto";
}

/* =========================
   SCORING AFINADO
   ========================= */

function scorePerfume(
  perfume: Perfume,
  winningProfile: string,
  time: TimeContext
): number {
  let score = 0;

  // Tiempo
  if (time === "dia") {
    if (perfume.afinidad?.contexto?.includes("diario")) score += 1;
    if (perfume.afinidad?.contexto?.includes("oficina")) score += 1;
  }

  if (time === "noche") {
    if (perfume.afinidad?.contexto?.includes("noche")) score += 1.5;
    if (perfume.afinidad?.contexto?.includes("cita")) score += 1;
  }

  if (time === "mixto") {
    if (perfume.afinidad?.contexto?.includes("evento")) score += 1;
  }

  // Dulzor
  if (winningProfile === "fresco" && perfume.matices?.dulzor === "seco") {
    score += 0.5;
  }

  if (
    ["intenso", "misterioso", "magnetica"].includes(winningProfile) &&
    ["equilibrado", "dulce"].includes(perfume.matices?.dulzor)
  ) {
    score += 0.5;
  }

  // Intensidad
  if (time === "dia" && perfume.adn?.intensidad === "media") {
    score += 0.5;
  }

  if (
    time === "noche" &&
    ["media-alta", "alta"].includes(perfume.adn?.intensidad)
  ) {
    score += 0.5;
  }

  return score;
}

/* =========================
   RESULTADO FINAL
   ========================= */

export function calculateProfile(
  userScores: ProfileScores
): TestResult {
  const gender = getGender();
  const perfumes = gender === "mujer" ? mujerPerfumes : hombrePerfumes;

  if (!perfumes.length) {
    return { principal: null, secundarios: [] };
  }

  const winningProfile = getWinningProfile(userScores, gender);
  const timeContext = getTimeContext(userScores);

  let candidates = perfumes.filter(
    (p) => p.profileId === winningProfile
  );

  if (!candidates.length) {
    candidates = perfumes;
  }

  const ranked = [...candidates].sort(
    (a, b) =>
      scorePerfume(b, winningProfile, timeContext) -
      scorePerfume(a, winningProfile, timeContext)
  );

  const preferredId =
    MAIN_PERFUME_BY_PROFILE[gender][winningProfile];

  const rawPrincipal =
    ranked.find((p) => p.id === preferredId) || ranked[0];

  const principal = withResolvedImage(rawPrincipal, gender);

  const secundarios: Perfume[] = [];

  for (const p of ranked) {
    if (p.id !== principal.id && secundarios.length < 2) {
      secundarios.push(withResolvedImage(p, gender));
    }
  }

  if (secundarios.length < 2) {
    for (const p of perfumes) {
      if (
        p.id !== principal.id &&
        !secundarios.some((s) => s.id === p.id) &&
        secundarios.length < 2
      ) {
        secundarios.push(withResolvedImage(p, gender));
      }
    }
  }

  return {
    principal,
    secundarios,
  };
}
