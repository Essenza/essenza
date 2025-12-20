import { useLocation, useNavigate } from "react-router-dom";
import type { Perfume } from "../types/perfume";
import { profiles } from "../data/profiles";

type LocationState = {
  principal: Perfume;
  secundarios: Perfume[];
};

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  let state = location.state as LocationState | undefined;

  // Fallback si se refresca la página
  if (!state) {
    const stored = sessionStorage.getItem("essenza-result");
    if (stored) {
      state = JSON.parse(stored) as LocationState;
    }
  }

  if (!state || !state.principal) {
    return (
      <main className="result">
        <p>No se ha podido cargar el resultado.</p>
        <button className="home-cta" onClick={() => navigate("/")}>
          Volver al inicio
        </button>
      </main>
    );
  }

  const { principal, secundarios } = state;

  // 🔑 PERFIL ACTUAL (TEXTOS NUEVOS)
  const profileData = profiles.find(
    (p) => p.id === principal.profileId
  );

  return (
    <main className="result">
      {/* PERFIL OLFATIVO */}
      <section className="result-profile compact">
        <span className="result-eyebrow">TU PERFIL OLFATIVO</span>
        <p className="result-family">
  Familia olfativa: <strong>{profileData?.family}</strong>
</p>

        <p className="result-description profile-text">
          {profileData?.description}
        </p>
      </section>

      {/* PERFUME PRINCIPAL */}
      <section className="result-main">
        <span className="result-label">RECOMENDADO PARA TI</span>

        <img
          src={principal.imageUrl}
          alt={principal.name}
          className="result-main-image"
        />

        <h1 className="result-main-name">
          {principal.name}
          <span className="result-main-separator"> · </span>
          <span className="result-main-brand-inline">
            {principal.brand}
          </span>
        </h1>

        <div className="alt-text" style={{ margin: "0 auto" }}>
          <p className="result-description">
            {principal.editorial.principal}
          </p>

          <p className="alt-description">
            {principal.tagline}
          </p>
        </div>

        <a
          href={principal.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="result-main-cta"
        >
          Ver en Amazon
        </a>
      </section>

      {/* PERFUMES ALTERNATIVOS */}
      {secundarios.length > 0 && (
        <section className="result-alternatives">
          <h2 className="result-alt-title">
            También encajan contigo
          </h2>

          <div className="result-alt-grid aligned">
            {secundarios.map((p) => (
              <div key={p.id} className="alt-card aligned">
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="alt-image"
                />

                <div className="alt-text">
                  <h4>
                    {p.name}
                    <span className="alt-separator"> · </span>
                    <span className="alt-brand-inline">
                      {p.brand}
                    </span>
                  </h4>

                  <p className="alt-description">
                    {p.tagline}
                  </p>

                  <a
                    href={p.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="alt-cta"
                  >
                    VER EN AMAZON
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* AVISO AFILIADOS */}
          <p
            style={{
              marginTop: "40px",
              fontSize: "12px",
              color: "#777",
              textAlign: "center"
            }}
          >
            Como afiliados de Amazon, obtenemos ingresos por las
            compras adscritas que cumplen los requisitos aplicables.
          </p>
        </section>
      )}

      {/* REPETIR TEST */}
      <section className="result-repeat">
        <button
          className="repeat-cta"
          onClick={() => {
            sessionStorage.removeItem("essenza-result");
            navigate("/test");
          }}
        >
          Repetir el test
        </button>
      </section>
    </main>
  );
}
