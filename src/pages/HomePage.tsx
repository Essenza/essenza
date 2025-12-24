import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  function handleSelectGender(value: "hombre" | "mujer") {
    localStorage.setItem("gender", value);
    navigate(value === "hombre" ? "/hombre" : "/mujer");
  }

  return (
    <main className="home">
      <div className="home-inner">
        <span className="home-eyebrow">ESSENZA</span>

        <h1 className="home-title">
          ¿Para quién es tu perfume?
        </h1>

        <div className="gender-choice">
          <button
            className="gender-button"
            onClick={() => handleSelectGender("hombre")}
          >
            <div className="gender-button-text">
              <strong>HOMBRE</strong>
              <span>Carácter · Intensidad · Presencia</span>
            </div>
          </button>

          <button
            className="gender-button"
            onClick={() => handleSelectGender("mujer")}
          >
            <div className="gender-button-text">
              <strong>MUJER</strong>
              <span>Identidad · Atracción · Esencia</span>
            </div>
          </button>
        </div>

        {/* SEO TEXT */}
        <section className="home-seo">
          <h2>Perfumes según tu personalidad</h2>
          <p>
            En ESSENZA descubres qué perfume encaja contigo según tu carácter,
            tu forma de sentir y tu presencia personal.
            Nuestro test de personalidad olfativa analiza rasgos clave para
            recomendar perfumes árabes intensos, elegantes y con identidad propia.
          </p>
        </section>
      </div>
    </main>
  );
}
