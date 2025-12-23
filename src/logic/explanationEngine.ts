import type { Perfume } from "../types/perfume";

/* =========================
   GÉNERO
   ========================= */

function getGender(): "hombre" | "mujer" {
  const g = localStorage.getItem("gender");
  return g === "mujer" ? "mujer" : "hombre";
}

/* =========================
   TEXTO POR FAMILIA OLFATIVA
   ========================= */

function familyText(
  familias: string[],
  gender: "hombre" | "mujer"
): string {
  if (familias.includes("floral")) {
    return gender === "mujer"
      ? "las notas florales realzan tu lado más expresivo y femenino"
      : "las notas florales aportan equilibrio y refinamiento";
  }

  if (familias.includes("dulce")) {
    return gender === "mujer"
      ? "los matices dulces envuelven y dejan una sensación cercana y atractiva"
      : "los matices dulces aportan presencia y carácter";
  }

  if (familias.includes("oud")) {
    return gender === "mujer"
      ? "el oud aporta profundidad y un magnetismo muy personal"
      : "el oud refuerza una presencia intensa y dominante";
  }

  if (familias.includes("amaderado")) {
    return gender === "mujer"
      ? "las maderas aportan solidez y elegancia"
      : "las maderas refuerzan una sensación de firmeza y seguridad";
  }

  if (familias.includes("fresco") || familias.includes("aromatico")) {
    return gender === "mujer"
      ? "la frescura transmite naturalidad y ligereza"
      : "la frescura aporta limpieza y facilidad de uso";
  }

  if (familias.includes("oriental") || familias.includes("ambarado")) {
    return gender === "mujer"
      ? "los acordes orientales crean una estela cálida y envolvente"
      : "los acordes orientales aportan profundidad y carácter";
  }

  return gender === "mujer"
    ? "su composición encaja con tu forma de expresarte"
    : "su composición encaja con tu estilo";
}

/* =========================
   TEXTO POR ROL
   ========================= */

function roleText(
  role: Perfume["role"],
  gender: "hombre" | "mujer"
): string {
  switch (role) {
    case "principal":
      return gender === "mujer"
        ? "es la opción que mejor te representa y define tu huella"
        : "es la opción que mejor te define y encaja contigo";

    case "versatil":
      return gender === "mujer"
        ? "funciona muy bien en distintas situaciones sin perder personalidad"
        : "se adapta fácilmente a diferentes contextos";

    case "secundario":
      return gender === "mujer"
        ? "aporta una alternativa interesante para variar según el momento"
        : "es una buena alternativa para cambiar de registro";

    default:
      return "";
  }
}

/* =========================
   EXPLICACIÓN PRINCIPAL
   ========================= */

export function explainPerfume(
  perfume: Perfume,
  profileName: string
): string {
  const gender = getGender();

  const intensityText: Record<string, string> = {
    baja: "suave",
    media: "equilibrada",
    "media-alta": "con presencia",
    alta: "intensa",
  };

  const presenceText: Record<string, string> = {
    discreta: "acompaña sin imponerse",
    equilibrada: "se hace notar con elegancia",
    protagonista: "marca presencia desde el primer momento",
  };

  const intensidad =
    intensityText[perfume.adn.intensidad] ?? "equilibrada";

  const presencia =
    presenceText[perfume.adn.presencia] ??
    "se hace notar con elegancia";

  const familyExplanation = familyText(
    perfume.adn.familia,
    gender
  );

  const roleExplanation = roleText(
    perfume.role,
    gender
  );

  const riskText =
    perfume.matices.riesgo === "seguro"
      ? gender === "mujer"
        ? "se integra con naturalidad en tu día a día"
        : "encaja fácilmente en tu rutina"
      : gender === "mujer"
      ? "está pensada para momentos donde quieres dejar huella"
      : "está pensada para destacar cuando importa";

  if (gender === "mujer") {
    return `
Este perfume encaja contigo porque conecta con tu perfil ${profileName.toLowerCase()}.
Tiene una intensidad ${intensidad} y una presencia que ${presencia}.
Además, ${familyExplanation}.
Por último, ${roleExplanation}, y ${riskText}.
`.trim();
  }

  // HOMBRE
  return `
Este perfume encaja contigo porque refleja tu perfil ${profileName.toLowerCase()}.
Su intensidad es ${intensidad} y ${presencia}.
Además, ${familyExplanation}.
Por último, ${roleExplanation}, y ${riskText}.
`.trim();
}

/* =========================
   EXPLICACIÓN ALTERNATIVA
   ========================= */

export function explainAlternative(
  perfume: Perfume,
  profileName: string
): string {
  const gender = getGender();

  const familyExplanation = familyText(
    perfume.adn.familia,
    gender
  );

  const roleExplanation = roleText(
    perfume.role,
    gender
  );

  return `Encaja contigo porque comparte tu perfil ${profileName.toLowerCase()}: ${roleExplanation}. Además, ${familyExplanation}.`;
}
