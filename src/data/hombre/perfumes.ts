// src/data/hombre/perfumes.ts
import type { Perfume } from "../../types/perfume";

export const perfumes: Perfume[] = [
  /* =========================
     PERFIL FRESCO
     ========================= */

  {
    id: "najdia",
    name: "Najdia",
    brand: "Lattafa",
    profileId: "fresco",
    amazonUrl: "https://amzn.to/3MJuiIu",
    imageUrl: "/images/hombre/najdia.jpg",
    tagline: "Fresco aromático limpio y fácil de llevar a diario.",
    isArab: true,
    role: "versatil",
    adn: {
      intensidad: "media",
      presencia: "discreta",
      carácter: ["limpio"],
      familia: ["fresco", "aromatico"]
    },
    afinidad: {
      contexto: ["diario", "oficina"],
      personalidad: ["introspectivo"],
      edadOlfativa: "atemporal"
    },
    matices: {
      dulzor: "seco",
      modernidad: "moderno",
      riesgo: "seguro"
    },
    editorial: {
      principal: "Frescura limpia y funcional.",
      secundario: "Cómodo y sin excesos."
    }
  },

  {
    id: "ventana",
    name: "Ventana",
    brand: "Armaf",
    profileId: "fresco",
    amazonUrl: "https://amzn.to/4p1MkD9",
    imageUrl: "/images/hombre/ventana.jpg",
    tagline: "Fresco verde y especiado con carácter juvenil.",
    isArab: true,
    role: "secundario",
    adn: {
      intensidad: "media",
      presencia: "discreta",
      carácter: ["moderno"],
      familia: ["fresco"]
    },
    afinidad: {
      contexto: ["diario"],
      personalidad: ["seguro"],
      edadOlfativa: "joven"
    },
    matices: {
      dulzor: "seco",
      modernidad: "moderno",
      riesgo: "seguro"
    },
    editorial: {
      principal: "Frescura moderna y directa.",
      secundario: "Ideal para diario."
    }
  },

  {
    id: "ana-abiyedh",
    name: "Ana Abiyedh",
    brand: "Lattafa",
    profileId: "fresco",
    amazonUrl: "https://amzn.to/44GifBT",
    imageUrl: "/images/hombre/ana-abiyedh.jpg",
    tagline: "Almizclado limpio con un dulzor suave y elegante.",
    isArab: true,
    role: "secundario",
    adn: {
      intensidad: "media",
      presencia: "discreta",
      carácter: ["limpio"],
      familia: ["fresco"]
    },
    afinidad: {
      contexto: ["diario", "oficina"],
      personalidad: ["introspectivo"],
      edadOlfativa: "atemporal"
    },
    matices: {
      dulzor: "equilibrado",
      modernidad: "moderno",
      riesgo: "seguro"
    },
    editorial: {
      principal: "Almizcle limpio y agradable.",
      secundario: "Muy fácil de llevar."
    }
  },

  {
    id: "suqraat",
    name: "Suqraat",
    brand: "Lattafa",
    profileId: "fresco",
    amazonUrl: "https://amzn.to/4avHieE",
    imageUrl: "/images/hombre/suqraat.jpg",
    tagline: "Fresco aromático seco y directo.",
    isArab: true,
    role: "secundario",
    adn: {
      intensidad: "media",
      presencia: "discreta",
      carácter: ["limpio", "moderno"],
      familia: ["fresco", "aromatico"]
    },
    afinidad: {
      contexto: ["diario"],
      personalidad: ["seguro"],
      edadOlfativa: "joven"
    },
    matices: {
      dulzor: "seco",
      modernidad: "moderno",
      riesgo: "seguro"
    },
    editorial: {
      principal: "Frescura aromática y funcional.",
      secundario: "Ligero y muy llevable."
    }
  },

  /* =========================
     PERFIL ELEGANTE
     ========================= */

  {
    id: "cdn-milestone",
    name: "Club de Nuit Milestone",
    brand: "Armaf",
    profileId: "elegante",
    amazonUrl: "https://amzn.to/4pUXdYU",
    imageUrl: "/images/hombre/cdn-milestone.jpg",
    tagline: "Fresco marino con un toque salino elegante.",
    isArab: true,
    role: "principal",
    adn: {
      intensidad: "media",
      presencia: "equilibrada",
      carácter: ["elegante", "limpio"],
      familia: ["fresco", "amaderado"]
    },
    afinidad: {
      contexto: ["diario", "evento"],
      personalidad: ["seguro"],
      edadOlfativa: "atemporal"
    },
    matices: {
      dulzor: "seco",
      modernidad: "moderno",
      riesgo: "seguro"
    },
    editorial: {
      principal: "Elegancia fresca con aire marino.",
      secundario: "Refrescante y con cuerpo."
    }
  },

  {
    id: "emeer",
    name: "Emeer",
    brand: "Lattafa",
    profileId: "elegante",
    amazonUrl: "https://amzn.to/3YaiykO",
    imageUrl: "/images/hombre/emeer.jpg",
    tagline: "Elegancia cálida, refinada y moderna.",
    isArab: true,
    role: "secundario",
    adn: {
      intensidad: "media",
      presencia: "equilibrada",
      carácter: ["elegante"],
      familia: ["amaderado"]
    },
    afinidad: {
      contexto: ["evento", "oficina"],
      personalidad: ["seguro"],
      edadOlfativa: "madura"
    },
    matices: {
      dulzor: "equilibrado",
      modernidad: "moderno",
      riesgo: "seguro"
    },
    editorial: {
      principal: "Elegancia sobria y actual.",
      secundario: "Refinado sin excesos."
    }
  },

  /* =========================
     PERFIL INTENSO
     ========================= */

  {
    id: "asad",
    name: "Asad",
    brand: "Lattafa",
    profileId: "intenso",
    amazonUrl: "https://amzn.to/3L4eHTb",
    imageUrl: "/images/hombre/asad.jpg",
    tagline: "Especiado cálido con vainilla y presencia elegante.",
    isArab: true,
    role: "principal",
    adn: {
      intensidad: "media-alta",
      presencia: "equilibrada",
      carácter: ["elegante"],
      familia: ["amaderado", "especiado"]
    },
    afinidad: {
      contexto: ["noche", "evento"],
      personalidad: ["seguro"],
      edadOlfativa: "atemporal"
    },
    matices: {
      dulzor: "equilibrado",
      modernidad: "moderno",
      riesgo: "seguro"
    },
    editorial: {
      principal: "Potente pero controlado.",
      secundario: "Cálido y elegante."
    }
  },

  {
    id: "fakhar-black",
    name: "Fakhar Black",
    brand: "Lattafa",
    profileId: "intenso",
    amazonUrl: "https://amzn.to/3MITTkT",
    imageUrl: "/images/hombre/fakhar-black.jpg",
    tagline: "Intenso moderno con presencia limpia.",
    isArab: true,
    role: "secundario",
    adn: {
      intensidad: "media-alta",
      presencia: "equilibrada",
      carácter: ["moderno"],
      familia: ["aromatico"]
    },
    afinidad: {
      contexto: ["noche", "evento"],
      personalidad: ["seguro"],
      edadOlfativa: "joven"
    },
    matices: {
      dulzor: "equilibrado",
      modernidad: "moderno",
      riesgo: "seguro"
    },
    editorial: {
      principal: "Intensidad moderna y directa.",
      secundario: "Muy llevable."
    }
  },

  /* =========================
     PERFIL MISTERIOSO
     ========================= */

  {
    id: "khamrah",
    name: "Khamrah",
    brand: "Lattafa",
    profileId: "misterioso",
    amazonUrl: "https://amzn.to/49mABKM",
    imageUrl: "/images/hombre/khamrah.jpg",
    tagline: "Gourmand intenso, dulce y muy envolvente.",
    isArab: true,
    role: "principal",
    adn: {
      intensidad: "alta",
      presencia: "protagonista",
      carácter: ["oscuro", "seductor"],
      familia: ["oriental", "dulce"]
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
      principal: "Dulce intenso y memorable.",
      secundario: "No pasa desapercibido."
    }
  },

  {
    id: "9pm",
    name: "9PM",
    brand: "Afnan",
    profileId: "misterioso",
    amazonUrl: "https://amzn.to/3ML9Kzj",
    imageUrl: "/images/hombre/9pm.jpg",
    tagline: "Dulce afrutado nocturno con vainilla protagonista.",
    isArab: true,
    role: "versatil",
    adn: {
      intensidad: "media-alta",
      presencia: "equilibrada",
      carácter: ["seductor", "moderno"],
      familia: ["dulce"]
    },
    afinidad: {
      contexto: ["noche", "evento"],
      personalidad: ["atrevido"],
      edadOlfativa: "joven"
    },
    matices: {
      dulzor: "dulce",
      modernidad: "moderno",
      riesgo: "seguro"
    },
    editorial: {
      principal: "Dulce, juvenil y muy popular.",
      secundario: "Perfecto para salir."
    }
  },

  {
    id: "oud-for-glory",
    name: "Oud for Glory",
    brand: "Lattafa",
    profileId: "misterioso",
    amazonUrl: "https://amzn.to/4qmVew7",
    imageUrl: "/images/hombre/oud-for-glory.jpg",
    tagline: "Oud oscuro, potente y magnético.",
    isArab: true,
    role: "secundario",
    adn: {
      intensidad: "alta",
      presencia: "protagonista",
      carácter: ["oscuro", "seductor"],
      familia: ["oud", "oriental"]
    },
    afinidad: {
      contexto: ["noche", "evento"],
      personalidad: ["seguro", "atrevido"],
      edadOlfativa: "madura"
    },
    matices: {
      dulzor: "seco",
      modernidad: "moderno",
      riesgo: "arriesgado"
    },
    editorial: {
      principal: "Oud intenso y dominante.",
      secundario: "Para gustos decididos."
    }
  }
];
