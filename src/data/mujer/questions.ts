import type { Question } from "../../types/question";

export const questions: Question[] = [
  {
    id: "q1",
    text: "Cuando entras en un lugar, ¿qué sueles transmitir sin proponértelo?",
    options: [
      {
        id: "q1o1",
        text: "Una atracción silenciosa, difícil de ignorar",
        scores: { magnetica: 3, elegante: -1 }
      },
      {
        id: "q1o2",
        text: "Elegancia y equilibrio",
        scores: { elegante: 2 }
      },
      {
        id: "q1o3",
        text: "Emoción e intensidad",
        scores: { intensa: 3, elegante: -1 }
      }
    ]
  },
  {
    id: "q2",
    text: "Te sientes más tú misma cuando…",
    options: [
      {
        id: "q2o1",
        text: "No necesitas demostrar nada",
        scores: { elegante: 2 }
      },
      {
        id: "q2o2",
        text: "Todo está en armonía",
        scores: { elegante: 2 }
      },
      {
        id: "q2o3",
        text: "Vives las emociones con intensidad",
        scores: { intensa: 3, elegante: -1 }
      }
    ]
  },
  {
    id: "q3",
    text: "Si tu presencia dejara huella, sería porque…",
    options: [
      {
        id: "q3o1",
        text: "Resulta envolvente y profunda",
        scores: { magnetica: 3, elegante: -1 }
      },
      {
        id: "q3o2",
        text: "Refleja clase y seguridad",
        scores: { elegante: 2 }
      },
      {
        id: "q3o3",
        text: "Despierta emoción",
        scores: { intensa: 2 }
      }
    ]
  },
  {
    id: "q4",
    text: "En una situación especial, confías más en…",
    options: [
      {
        id: "q4o1",
        text: "Tu magnetismo natural",
        scores: { magnetica: 3, elegante: -1 }
      },
      {
        id: "q4o2",
        text: "Tu criterio y experiencia",
        scores: { elegante: 2 }
      },
      {
        id: "q4o3",
        text: "Lo que sientes en ese momento",
        scores: { intensa: 2 }
      }
    ]
  },
  {
    id: "q5",
    text: "¿Qué tipo de aromas te atraen más?",
    options: [
      {
        id: "q5o1",
        text: "Sensuales y envolventes",
        scores: { magnetica: 3, elegante: -1 }
      },
      {
        id: "q5o2",
        text: "Sutiles y refinados",
        scores: { elegante: 2 }
      },
      {
        id: "q5o3",
        text: "Golosos y emocionales",
        scores: { intensa: 3, elegante: -1 }
      }
    ]
  },
  {
    id: "q6",
    text: "Cuando alguien piensa en ti, te gustaría que sintiera que eres…",
    options: [
      {
        id: "q6o1",
        text: "Difícil de olvidar",
        scores: { magnetica: 3, elegante: -1 }
      },
      {
        id: "q6o2",
        text: "Elegante y coherente",
        scores: { elegante: 2 }
      },
      {
        id: "q6o3",
        text: "Apasionada y auténtica",
        scores: { intensa: 3, elegante: -1 }
      }
    ]
  }
];
