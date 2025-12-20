// src/types/perfume.ts

export type PerfumeRole = "principal" | "versatil" | "secundario";

export type Intensidad = "baja" | "media" | "media-alta" | "alta";
export type Presencia = "discreta" | "equilibrada" | "protagonista";

export type Caracter =
  | "elegante"
  | "seductor"
  | "misterioso"
  | "limpio"
  | "oscuro"
  | "moderno"
  | "cercano";

export type Familia =
  | "fresco"
  | "amaderado"
  | "ambarado"
  | "dulce"
  | "oriental"
  | "especiado"
  | "aromatico"
  | "oud"
  | "ahumado"
  | "floral";

export type Contexto = "diario" | "oficina" | "noche" | "evento" | "cita";
export type Personalidad = "seguro" | "atrevido" | "refinado" | "introspectivo";
export type EdadOlfativa = "joven" | "madura" | "atemporal";

export type Dulzor = "seco" | "equilibrado" | "dulce";
export type Modernidad = "clasico" | "moderno";
export type Riesgo = "seguro" | "arriesgado";

export interface Perfume {
  id: string;
  name: string;
  brand: string;
  profileId: string;

  amazonUrl: string;
  imageUrl: string;

  /** Frase corta SIEMPRE presente (microcopy principal) */
  tagline: string;

  isArab: boolean;
  role: PerfumeRole;

  adn: {
    intensidad: Intensidad;
    presencia: Presencia;
    carácter: Caracter[];
    familia: Familia[];
  };

  afinidad: {
    contexto: Contexto[];
    personalidad: Personalidad[];
    edadOlfativa: EdadOlfativa;
  };

  matices: {
    dulzor: Dulzor;
    modernidad: Modernidad;
    riesgo: Riesgo;
  };

  editorial: {
    principal: string;
    secundario: string;
  };
}
