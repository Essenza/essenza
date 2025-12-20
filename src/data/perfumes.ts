// src/data/perfumes.ts
import type { Perfume } from "../types/perfume";

export const perfumes: Perfume[] = [
  {
    id: "najdia",
    name: "Najdia",
    brand: "Lattafa",
    profileId: "fresco",
    amazonUrl: "https://amzn.to/3MJuiIu",
    imageUrl: "/assets/perfumes/najdia.jpg",
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
    id: "cdn-milestone",
    name: "Club de Nuit Milestone",
    brand: "Armaf",
    profileId: "fresco",
    amazonUrl: "https://amzn.to/4pUXdYU",
    imageUrl: "/assets/perfumes/cdn-milestone.jpg",
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
      personalidad: ["refinado", "seguro"],
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
    id: "ventana",
    name: "Ventana",
    brand: "Armaf",
    profileId: "fresco",
    amazonUrl: "https://amzn.to/4p1MkD9",
    imageUrl: "/assets/perfumes/ventana.jpg",
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
    amazonUrl: "https://amzn.to/3Yx47Ht",
    imageUrl: "/assets/perfumes/ana-abiyedh.jpg",
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
    id: "asad",
    name: "Asad",
    brand: "Lattafa",
    profileId: "intenso",
    amazonUrl: "https://amzn.to/3L4eHTb",
    imageUrl: "/assets/perfumes/asad.jpg",
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
      personalidad: ["refinado"],
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
    id: "khamrah",
    name: "Khamrah",
    brand: "Lattafa",
    profileId: "intenso",
    amazonUrl: "https://amzn.to/49mABKM",
    imageUrl: "/assets/perfumes/khamrah.jpg",
    tagline: "Gourmand intenso, dulce y muy envolvente.",
    isArab: true,
    role: "principal",
    adn: {
      intensidad: "alta",
      presencia: "protagonista",
      carácter: ["seductor", "oscuro"],
      familia: ["ambarado", "dulce", "oriental"]
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
    profileId: "intenso",
    amazonUrl: "https://amzn.to/4qamvli",
    imageUrl: "/assets/perfumes/9pm.jpg",
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
    id: "emeer",
    name: "Emeer",
    brand: "Lattafa",
    profileId: "elegante",
    amazonUrl: "https://amzn.to/4qhZEo1",
    imageUrl: "/assets/perfumes/emeer.jpg",
    tagline: "Amaderado elegante con fondo cálido y refinado.",
    isArab: true,
    role: "principal",
    adn: {
      intensidad: "media",
      presencia: "equilibrada",
      carácter: ["elegante"],
      familia: ["amaderado"]
    },
    afinidad: {
      contexto: ["evento", "oficina"],
      personalidad: ["refinado"],
      edadOlfativa: "atemporal"
    },
    matices: {
      dulzor: "seco",
      modernidad: "clasico",
      riesgo: "seguro"
    },
    editorial: {
      principal: "Elegancia sobria.",
      secundario: "Clásico bien ejecutado."
    }
  },

  {
    id: "fakhar-black",
    name: "Fakhar Black",
    brand: "Lattafa",
    profileId: "elegante",
    amazonUrl: "https://amzn.to/3MJLvl1",
    imageUrl: "/assets/perfumes/fakhar-black.jpg",
    tagline: "Aromático limpio con aire elegante y moderno.",
    isArab: true,
    role: "secundario",
    adn: {
      intensidad: "media",
      presencia: "equilibrada",
      carácter: ["elegante", "moderno"],
      familia: ["aromatico"]
    },
    afinidad: {
      contexto: ["diario", "oficina"],
      personalidad: ["seguro"],
      edadOlfativa: "atemporal"
    },
    matices: {
      dulzor: "seco",
      modernidad: "moderno",
      riesgo: "seguro"
    },
    editorial: {
      principal: "Elegancia fácil.",
      secundario: "Muy versátil."
    }
  },

  {
    id: "suqraat",
    name: "Suqraat",
    brand: "Lattafa",
    profileId: "elegante",
    amazonUrl: "https://amzn.to/3Yx47Ht",
    imageUrl: "/assets/perfumes/suqraat.jpg",
    tagline: "Fresco elegante con inspiración clásica.",
    isArab: true,
    role: "versatil",
    adn: {
      intensidad: "media",
      presencia: "equilibrada",
      carácter: ["cercano"],
      familia: ["ambarado"]
    },
    afinidad: {
      contexto: ["diario"],
      personalidad: ["seguro"],
      edadOlfativa: "atemporal"
    },
    matices: {
      dulzor: "equilibrado",
      modernidad: "clasico",
      riesgo: "seguro"
    },
    editorial: {
      principal: "Elegante sin estridencias.",
      secundario: "Muy usable."
    }
  },

  {
    id: "amber-oud-gold",
    name: "Amber Oud Gold Edition",
    brand: "Al Haramain",
    profileId: "misterioso",
    amazonUrl: "https://amzn.to/4qhZEo1",
    imageUrl: "/assets/perfumes/amber-oud-gold.jpg",
    tagline: "Dulce ambarado intenso con estela potente.",
    isArab: true,
    role: "principal",
    adn: {
      intensidad: "media-alta",
      presencia: "protagonista",
      carácter: ["seductor"],
      familia: ["ambarado", "dulce"]
    },
    afinidad: {
      contexto: ["noche", "evento"],
      personalidad: ["atrevido"],
      edadOlfativa: "madura"
    },
    matices: {
      dulzor: "dulce",
      modernidad: "moderno",
      riesgo: "arriesgado"
    },
    editorial: {
      principal: "Opulento y llamativo.",
      secundario: "Gran proyección."
    }
  },

  {
    id: "amethyst",
    name: "Amethyst",
    brand: "Lattafa",
    profileId: "misterioso",
    amazonUrl: "https://amzn.to/4p1MkD9",
    imageUrl: "/assets/perfumes/amethyst.jpg",
    tagline: "Floral oscuro con rosa y fondo profundo.",
    isArab: true,
    role: "principal",
    adn: {
      intensidad: "alta",
      presencia: "protagonista",
      carácter: ["misterioso", "oscuro"],
      familia: ["oriental", "floral"]
    },
    afinidad: {
      contexto: ["noche"],
      personalidad: ["atrevido"],
      edadOlfativa: "madura"
    },
    matices: {
      dulzor: "equilibrado",
      modernidad: "moderno",
      riesgo: "arriesgado"
    },
    editorial: {
      principal: "Floral intenso y profundo.",
      secundario: "Con personalidad."
    }
  },

  {
    id: "oud-for-glory",
    name: "Oud for Glory",
    brand: "Lattafa",
    profileId: "misterioso",
    amazonUrl: "https://amzn.to/3MJuiIu",
    imageUrl: "/assets/perfumes/oud-for-glory.jpg",
    tagline: "Oud oscuro, seco y con carácter dominante.",
    isArab: true,
    role: "principal",
    adn: {
      intensidad: "alta",
      presencia: "protagonista",
      carácter: ["oscuro"],
      familia: ["amaderado", "oud"]
    },
    afinidad: {
      contexto: ["noche"],
      personalidad: ["atrevido"],
      edadOlfativa: "madura"
    },
    matices: {
      dulzor: "seco",
      modernidad: "moderno",
      riesgo: "arriesgado"
    },
    editorial: {
      principal: "Oud potente y serio.",
      secundario: "Muy marcado."
    }
  },

  {
    id: "ameer-al-oudh",
    name: "Ameer Al Oudh",
    brand: "Lattafa",
    profileId: "misterioso",
    amazonUrl: "https://amzn.to/4pUXdYU",
    imageUrl: "/assets/perfumes/ameer-al-oudh.jpg",
    tagline: "Ahumado dulce con madera y vainilla.",
    isArab: true,
    role: "versatil",
    adn: {
      intensidad: "media-alta",
      presencia: "equilibrada",
      carácter: ["misterioso"],
      familia: ["ambarado", "ahumado"]
    },
    afinidad: {
      contexto: ["noche"],
      personalidad: ["atrevido"],
      edadOlfativa: "atemporal"
    },
    matices: {
      dulzor: "dulce",
      modernidad: "moderno",
      riesgo: "arriesgado"
    },
    editorial: {
      principal: "Ahumado dulce muy reconocible.",
      secundario: "Original y envolvente."
    }
  },

  {
    id: "shaghaf-oud",
    name: "Shaghaf Oud",
    brand: "Swiss Arabian",
    profileId: "misterioso",
    amazonUrl: "https://amzn.to/4qhZEo1",
    imageUrl: "/assets/perfumes/shaghaf-oud.jpg",
    tagline: "Oud dulce con rosa y gran intensidad.",
    isArab: true,
    role: "principal",
    adn: {
      intensidad: "alta",
      presencia: "protagonista",
      carácter: ["seductor", "oscuro"],
      familia: ["dulce", "oud"]
    },
    afinidad: {
      contexto: ["noche", "evento"],
      personalidad: ["atrevido"],
      edadOlfativa: "madura"
    },
    matices: {
      dulzor: "dulce",
      modernidad: "moderno",
      riesgo: "arriesgado"
    },
    editorial: {
      principal: "Dulce y poderoso.",
      secundario: "Gran estela."
    }
  }
];
