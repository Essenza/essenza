import type { Profile } from "../../types/profile";

export const profiles: Profile[] = [
  {
    id: "fresco",
    name: "Fresco y Natural",
    family: "Fresco · verde · funcional",
    description: `
No buscas destacar por exceso, sino por coherencia.
Tu presencia es limpia, directa y fácil de recordar.

Te mueves con naturalidad, sin necesidad de imponerte.
Hay algo en tu forma de estar que transmite cercanía,
equilibrio y una confianza tranquila.

Las fragancias frescas de la perfumería árabe encajan contigo
porque acompañan tu ritmo sin invadirlo.
No te definen por lo que gritan,
sino por lo que dejan cuando ya no estás.
    `.trim()
  },
  {
    id: "intenso",
    name: "Intenso y Magnético",
    family: "Oriental · especiado · profundo",
    description: `
Tu presencia no pasa desapercibida.
Hay una intensidad natural en tu forma de estar,
una manera de ocupar el espacio que atrae miradas.

No buscas agradar a todo el mundo,
pero quien conecta contigo lo hace de verdad.
Tu energía es firme, profunda y difícil de ignorar.

Las fragancias intensas de la perfumería árabe encajan contigo
porque amplifican lo que ya llevas dentro.
No te preceden: te acompañan.
Y cuando llegas, se nota.
    `.trim()
  },
  {
    id: "elegante",
    name: "Elegante y Sofisticado",
    family: "Amaderado · limpio · refinado",
    description: `
Tu estilo no necesita excesos.
Prefieres la precisión, el equilibrio y los detalles bien medidos.

Tu presencia transmite calma, seguridad y una elegancia
que no depende de modas ni de tendencias pasajeras.
Hablas poco, pero cuando lo haces, se nota.

Las fragancias elegantes de la perfumería árabe encajan contigo
porque refuerzan tu forma de estar sin imponerse.
Son perfumes que no buscan protagonismo,
pero siempre están donde deben.
    `.trim()
  },
  {
    id: "calido",
    name: "Cálido y Envolvente",
    family: "Ámbar · dulce · envolvente",
    description: `
Tu presencia es cercana y reconfortante.
Hay algo en tu forma de estar que invita a quedarse.

No necesitas imponerte para ser recordado.
Transmites humanidad, profundidad y una sensación
de confianza difícil de fingir.

Las fragancias cálidas de la perfumería árabe encajan contigo
porque acompañan tu lado más emocional.
No llaman la atención de inmediato,
pero se quedan mucho tiempo en la memoria.
    `.trim()
  },
  {
    id: "misterioso",
    name: "Misterioso y Profundo",
    family: "Oud · resinas · oscuro",
    description: `
No revelas todo a la primera.
Tu presencia despierta curiosidad y deja preguntas en el aire.

Hay una profundidad silenciosa en tu forma de estar,
una intensidad contenida que no necesita explicación.
No buscas ser comprendido, sino sentido.

Las fragancias profundas de la perfumería árabe encajan contigo
porque refuerzan ese aura difícil de definir.
No se explican.
Se experimentan.
    `.trim()
  }
];
