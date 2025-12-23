// src/data/mujer/perfumes.ts
import type { Perfume } from "../../types/perfume";

export const perfumes: Perfume[] = [
  /* =========================
     🌗 PERFIL · ELEGANTE
     ========================= */

  {
    id: "ana-abiyedh-white",
    name: "Ana Abiyedh White",
    brand: "Lattafa",
    profileId: "elegante",
    amazonUrl: "https://amzn.to/4qs3Rpi",
    imageUrl: "/images/mujer/ana-abiyedh-white.jpg",
    tagline: "Limpieza sofisticada con fondo elegante",
    isArab: true,
    role: "principal",
    adn: {
      intensidad: "media",
      presencia: "discreta",
      carácter: ["limpio", "elegante"],
      familia: ["floral"]
    },
    afinidad: {
      contexto: ["diario", "oficina", "evento"],
      personalidad: ["seguro", "introspectivo"],
      edadOlfativa: "atemporal"
    },
    matices: {
      dulzor: "seco",
      modernidad: "moderno",
      riesgo: "seguro"
    },
    editorial: {
      principal: "Elegancia silenciosa que se funde con la piel.",
      secundario: "Para quien transmite clase sin esfuerzo."
    }
  },

  {
    id: "club-de-nuit-woman",
    name: "Club de Nuit Woman",
    brand: "Armaf",
    profileId: "elegante",
    amazonUrl: "https://amzn.to/4pLmPXS",
    imageUrl: "/images/mujer/club-de-nuit-woman.jpg",
    tagline: "Feminidad elegante con carácter moderno",
    isArab: true,
    role: "secundario",
    adn: {
      intensidad: "media",
      presencia: "equilibrada",
      carácter: ["elegante", "moderno"],
      familia: ["floral"]
    },
    afinidad: {
      contexto: ["diario", "oficina"],
      personalidad: ["seguro"],
      edadOlfativa: "atemporal"
    },
    matices: {
      dulzor: "equilibrado",
      modernidad: "moderno",
      riesgo: "seguro"
    },
    editorial: {
      principal: "Floral femenino, limpio y bien definido.",
      secundario: "Presencia cuidada y muy versátil."
    }
  },

  {
    id: "hawas-pour-femme",
    name: "Hawas Pour Femme",
    brand: "Rasasi",
    profileId: "elegante",
    amazonUrl: "https://amzn.to/45pKTr5",
    imageUrl: "/images/mujer/hawas-pour-femme.jpg",
    tagline: "Equilibrio femenino entre frescura y clase",
    isArab: true,
    role: "secundario",
    adn: {
      intensidad: "media",
      presencia: "equilibrada",
      carácter: ["elegante"],
      familia: ["floral", "fresco"]
    },
    afinidad: {
      contexto: ["diario", "evento"],
      personalidad: ["seguro"],
      edadOlfativa: "atemporal"
    },
    matices: {
      dulzor: "equilibrado",
      modernidad: "moderno",
      riesgo: "seguro"
    },
    editorial: {
      principal: "Frescura femenina con fondo refinado.",
      secundario: "Elegancia moderna y fácil."
    }
  },

  /* =========================
     🌑 PERFIL · MAGNÉTICA
     ========================= */

  {
    id: "mayar-cherry-intense",
    name: "Mayar Cherry Intense",
    brand: "Lattafa",
    profileId: "magnetica",
    amazonUrl: "https://amzn.to/4scYSKD",
    imageUrl: "/images/mujer/mayar-cherry-intense.jpg",
    tagline: "Cereza oscura que atrae sin pedir permiso",
    isArab: true,
    role: "principal",
    adn: {
      intensidad: "media-alta",
      presencia: "protagonista",
      carácter: ["seductor", "oscuro"],
      familia: ["dulce", "oriental"]
    },
    afinidad: {
      contexto: ["noche", "cita"],
      personalidad: ["atrevido"],
      edadOlfativa: "madura"
    },
    matices: {
      dulzor: "dulce",
      modernidad: "moderno",
      riesgo: "arriesgado"
    },
    editorial: {
      principal: "Frutal oscuro y sensual con gran impacto.",
      secundario: "Magnetismo puro."
    }
  },

  {
    id: "forbidden-love",
    name: "Forbidden Love",
    brand: "Maison Alhambra",
    profileId: "magnetica",
    amazonUrl: "https://amzn.to/4qr2k2F",
    imageUrl: "/images/mujer/forbidden-love.jpg",
    tagline: "Frutal oscuro con elegancia sensual",
    isArab: true,
    role: "secundario",
    adn: {
      intensidad: "media",
      presencia: "equilibrada",
      carácter: ["seductor"],
      familia: ["dulce", "oriental"]
    },
    afinidad: {
      contexto: ["noche", "cita"],
      personalidad: ["atrevido"],
      edadOlfativa: "madura"
    },
    matices: {
      dulzor: "dulce",
      modernidad: "moderno",
      riesgo: "arriesgado"
    },
    editorial: {
      principal: "Sensualidad controlada con fondo frutal.",
      secundario: "Elegante y accesible."
    }
  },

  {
    id: "ajwad",
    name: "Ajwad",
    brand: "Lattafa",
    profileId: "magnetica",
    amazonUrl: "https://amzn.to/4j8aeeK",
    imageUrl: "/images/mujer/ajwad.jpg",
    tagline: "Calidez frutal con fondo envolvente",
    isArab: true,
    role: "secundario",
    adn: {
      intensidad: "media",
      presencia: "equilibrada",
      carácter: ["seductor"],
      familia: ["dulce", "oriental"]
    },
    afinidad: {
      contexto: ["diario", "cita"],
      personalidad: ["seguro"],
      edadOlfativa: "madura"
    },
    matices: {
      dulzor: "equilibrado",
      modernidad: "moderno",
      riesgo: "seguro"
    },
    editorial: {
      principal: "Frutal cálido y femenino.",
      secundario: "Agradable y envolvente."
    }
  },

  /* =========================
     🔥 PERFIL · INTENSA
     ========================= */

  {
    id: "yara",
    name: "Yara",
    brand: "Lattafa",
    profileId: "intensa",
    amazonUrl: "https://amzn.to/3MRuipN",
    imageUrl: "/images/mujer/yara.jpg",
    tagline: "Dulzor cremoso que abraza la piel",
    isArab: true,
    role: "principal",
    adn: {
      intensidad: "media-alta",
      presencia: "protagonista",
      carácter: ["moderno"],
      familia: ["dulce", "floral"]
    },
    afinidad: {
      contexto: ["diario", "evento"],
      personalidad: ["seguro"],
      edadOlfativa: "joven"
    },
    matices: {
      dulzor: "dulce",
      modernidad: "moderno",
      riesgo: "seguro"
    },
    editorial: {
      principal: "Un gourmand suave, femenino y adictivo.",
      secundario: "Intensidad agradable y muy llevadera."
    }
  },

  {
    id: "fakhar-rose",
    name: "Fakhar Rose",
    brand: "Lattafa",
    profileId: "intensa",
    amazonUrl: "https://amzn.to/4qtUuW9",
    imageUrl: "/images/mujer/fakhar-rose.jpg",
    tagline: "Floral intenso con carácter femenino",
    isArab: true,
    role: "secundario",
    adn: {
      intensidad: "alta",
      presencia: "protagonista",
      carácter: ["seductor", "moderno"],
      familia: ["floral", "dulce"]
    },
    afinidad: {
      contexto: ["noche", "evento"],
      personalidad: ["atrevido"],
      edadOlfativa: "madura"
    },
    matices: {
      dulzor: "equilibrado",
      modernidad: "moderno",
      riesgo: "arriesgado"
    },
    editorial: {
      principal: "Un floral potente con presencia marcada.",
      secundario: "Elegante, intenso y muy expresivo."
    }
  },

  {
    id: "raghba",
    name: "Raghba",
    brand: "Lattafa",
    profileId: "intensa",
    amazonUrl: "https://amzn.to/4jfCY5x",
    imageUrl: "/images/mujer/raghba.jpg",
    tagline: "Dulce oriental cálido y envolvente",
    isArab: true,
    role: "secundario",
    adn: {
      intensidad: "alta",
      presencia: "protagonista",
      carácter: ["oscuro", "seductor"],
      familia: ["oriental", "dulce"]
    },
    afinidad: {
      contexto: ["noche", "evento"],
      personalidad: ["atrevido"],
      edadOlfativa: "madura"
    },
    matices: {
      dulzor: "dulce",
      modernidad: "clasico",
      riesgo: "arriesgado"
    },
    editorial: {
      principal: "Oriental dulce, profundo y muy envolvente.",
      secundario: "Estela cálida con carácter."
    }
  }
];
