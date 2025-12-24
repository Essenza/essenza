import { useNavigate } from "react-router-dom";

export default function PerfumePersonalidadPage() {
  const navigate = useNavigate();

  return (
    <main className="pillar">
      <section className="pillar-hero">
        <h1>Perfume según tu personalidad</h1>
        <p className="pillar-intro">
          Elegir un perfume no es solo una cuestión de olor, sino de identidad.
          Cada aroma transmite una forma de estar en el mundo, una actitud y una
          presencia. En ESSENZA te ayudamos a descubrir qué perfume encaja contigo
          según tu personalidad.
        </p>

        <button
          className="pillar-cta"
          onClick={() => navigate("/")}
        >
          Descubre tu perfume ideal
        </button>
      </section>

      <section className="pillar-content">
        <h2>¿Por qué elegir un perfume según tu personalidad?</h2>
        <p>
          Un perfume no actúa igual en todas las personas. Más allá de las notas,
          influyen el carácter, la energía y la forma de relacionarse con el entorno.
          Por eso, elegir una fragancia acorde a tu personalidad hace que el aroma
          se sienta coherente, natural y auténtico.
        </p>

        <p>
          En lugar de seguir modas, el enfoque de ESSENZA se basa en el carácter.
          Nuestro test de personalidad olfativa analiza rasgos clave para recomendar
          perfumes con sentido, presencia y equilibrio.
        </p>

        <h2>Personalidades intensas</h2>
        <p>
          Las personas con una personalidad intensa buscan perfumes con carácter,
          profundidad y presencia. Son fragancias que no pasan desapercibidas y
          acompañan una forma de ser decidida, segura y dominante.
        </p>

        <h2>Personalidades elegantes</h2>
        <p>
          La elegancia se expresa a través de aromas equilibrados, bien construidos
          y coherentes. Son perfumes que transmiten distinción sin necesidad de
          excesos, ideales para quienes valoran la armonía y el estilo propio.
        </p>

        <h2>Personalidades misteriosas</h2>
        <p>
          Las personalidades misteriosas prefieren perfumes que evolucionan con el
          tiempo, que no se revelan de inmediato. Fragancias profundas, envolventes
          y con un punto enigmático que despiertan curiosidad.
        </p>

        <h2>Personalidades frescas</h2>
        <p>
          Las personas de carácter fresco y natural se sienten cómodas con aromas
          limpios, agradables y versátiles. Son perfumes que acompañan el día a día
          sin imponerse, transmitiendo cercanía y equilibrio.
        </p>

        <div className="pillar-final-cta">
          <button
            className="pillar-cta secondary"
            onClick={() => navigate("/")}
          >
            Haz el test y descubre tu perfume
          </button>
        </div>
      </section>
    </main>
  );
}
