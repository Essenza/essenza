import type { Question } from "../../types/question";

export const questions: Question[] = [
  {
    id: "q1",
    text: "Cuando entras en un lugar, ¿qué sueles transmitir sin proponértelo?",
    options: [
      {
        id: "q1o1",
        text: "Frescura y naturalidad",
        scores: { fresco: 3 }
      },
      {
        id: "q1o2",
        text: "Presencia intensa y segura",
        scores: { intenso: 3 }
      },
      {
        id: "q1o3",
        text: "Elegancia y control",
        scores: { elegante: 3 }
      },
      {
        id: "q1o4",
        text: "Un aura misteriosa difícil de leer",
        scores: { misterioso: 3 }
      }
    ]
  },

  {
    id: "q2",
    text: "Te sientes más tú mismo cuando…",
    options: [
      {
        id: "q2o1",
        text: "Todo fluye sin esfuerzo",
        scores: { fresco: 2 }
      },
      {
        id: "q2o2",
        text: "Sientes intensidad y carácter",
        scores: { intenso: 2 }
      },
      {
        id: "q2o3",
        text: "Las cosas están bajo control",
        scores: { elegante: 2 }
      },
      {
        id: "q2o4",
        text: "No todo el mundo te entiende",
        scores: { misterioso: 2 }
      }
    ]
  },

  {
    id: "q3",
    text: "Si tu presencia dejara huella, sería porque…",
    options: [
      {
        id: "q3o1",
        text: "Resulta limpia y agradable",
        scores: { fresco: 2 }
      },
      {
        id: "q3o2",
        text: "Es intensa y memorable",
        scores: { intenso: 2 }
      },
      {
        id: "q3o3",
        text: "Transmite clase y coherencia",
        scores: { elegante: 2 }
      },
      {
        id: "q3o4",
        text: "Tiene un fondo oscuro y profundo",
        scores: { misterioso: 2 }
      }
    ]
  },

  {
    id: "q4",
    text: "En una ocasión importante confías más en…",
    options: [
      {
        id: "q4o1",
        text: "Sentirte cómodo y fresco",
        scores: { fresco: 2 }
      },
      {
        id: "q4o2",
        text: "Imponer presencia",
        scores: { intenso: 2 }
      },
      {
        id: "q4o3",
        text: "Tu experiencia y criterio",
        scores: { elegante: 2 }
      },
      {
        id: "q4o4",
        text: "Tu lado más reservado",
        scores: { misterioso: 2 }
      }
    ]
  },

  {
    id: "q5",
    text: "¿Qué tipo de aromas te atraen más?",
    options: [
      {
        id: "q5o1",
        text: "Frescos, limpios y fáciles",
        scores: { fresco: 3 }
      },
      {
        id: "q5o2",
        text: "Especiados y con fuerza",
        scores: { intenso: 3 }
      },
      {
        id: "q5o3",
        text: "Elegantes y bien equilibrados",
        scores: { elegante: 3 }
      },
      {
        id: "q5o4",
        text: "Oscuros, profundos y con carácter",
        scores: { misterioso: 3 }
      }
    ]
  },

  {
    id: "q6",
    text: "Cuando alguien piensa en ti, te gustaría que sintiera que eres…",
    options: [
      {
        id: "q6o1",
        text: "Agradable y fácil de tratar",
        scores: { fresco: 2 }
      },
      {
        id: "q6o2",
        text: "Intenso y decidido",
        scores: { intenso: 2 }
      },
      {
        id: "q6o3",
        text: "Elegante y fiable",
        scores: { elegante: 2 }
      },
      {
        id: "q6o4",
        text: "Difícil de encasillar",
        scores: { misterioso: 2 }
      }
    ]
  },

  /* =========================
     🌗 CONTEXTO (CLAVE)
     ========================= */

  {
    id: "q7",
    text: "¿En qué situaciones sueles usar más perfume?",
    options: [
      {
        id: "q7o1",
        text: "En el día a día",
        scores: { fresco: 2, elegante: 1 }
      },
      {
        id: "q7o2",
        text: "En eventos o situaciones sociales",
        scores: { elegante: 2, intenso: 1 }
      },
      {
        id: "q7o3",
        text: "Por la noche o en citas",
        scores: { intenso: 2, misterioso: 1 }
      },
      {
        id: "q7o4",
        text: "Depende del momento",
        scores: { elegante: 1, misterioso: 1 }
      }
    ]
  }
];
