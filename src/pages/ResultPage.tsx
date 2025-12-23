import { useLocation, useNavigate } from "react-router-dom";
import type { Perfume } from "../types/perfume";
import { explainPerfume } from "../logic/explanationEngine";

import { profiles as hombreProfiles } from "../data/hombre/profiles";
import { profiles as mujerProfiles } from "../data/mujer/profiles";

type LocationState = {
  principal: Perfume;
  secundarios: Perfume[];
};

function resolveImage(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

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
  const gender = localStorage.getItem("gender");

  const profiles =
    gender === "mujer" ? mujerProfiles : hombreProfiles;

  const profileData = profiles.find(
    (p) => p.id === principal.profileId
  );

  return (
    <main className="result">
      {/* PERFIL (RESUMIDO) */}
      <section className="result-profile compact">
      <span className="result-eyebrow">ESTA ES TU ESENCIA</span>

      {profileData && (
    <>
      <p className="result-family">
        Familia olfativa: <strong>{profileData.family}</strong>
      </p>
        <p className="result-method">
        Te proponemos un perfume principal y dos alternativas afines,
        para que elijas según el momento o el contexto.
        </p>
      <details className="profile-more">
        <summary>Leer descripción de tu perfil</summary>
        <p className="result-description profile-text">
          {profileData.description}
        </p>
      </details>
    </>
      )}
      </section>



      {/* PERFUME PRINCIPAL (PROTAGONISTA) */}
      <section className="result-main">
        <span className="result-label">RECOMENDADO PARA TI</span>

        <img
          src={resolveImage(principal.imageUrl)}
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

        {/* FRASE EDITORIAL CORTA */}
        <p className="result-tagline">
        {principal.tagline}
        </p>


        <a
          href={principal.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="result-main-cta"
        >
          DESCUBRIR ESTE PERFUME
        </a>

        {/* REPETIR TEST (VISIBLE SIN SCROLL) */}
        <button
          className="repeat-inline"
          onClick={() => {
            sessionStorage.removeItem("essenza-result");
            navigate("/test");
          }}
        >
          Repetir el test
        </button>
      </section>

      {/* TEXTO LARGO DEL PERFIL (SECUNDARIO) */}
      {profileData && (
        <section className="result-profile-detail">
          <h2 className="result-section-title">
            Sobre tu perfil
          </h2>

          <p className="result-description profile-text">
            {profileData.description}
          </p>

          <p className="result-description">
            {explainPerfume(
              principal,
              profileData.name
            )}
          </p>
        </section>
      )}

      {/* ALTERNATIVOS */}
      {secundarios.length > 0 && (
        <section className="result-alternatives">
          <h2 className="result-alt-title">
            Otras opciones en tu línea
          </h2>

          <p className="result-alt-intro">
            Si algún día buscas una variación sin salir de tu perfil.
          </p>

          <div className="result-alt-grid aligned">
            {secundarios.map((p) => (
              <div key={p.id} className="alt-card aligned">
                <img
                  src={resolveImage(p.imageUrl)}
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
                    Ver en Amazon
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="affiliate-note">
            Como afiliados de Amazon, obtenemos ingresos por
            las compras adscritas que cumplen los requisitos
            aplicables.
          </p>
        </section>
      )}
    </main>
  );
}
