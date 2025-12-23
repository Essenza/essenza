import { useNavigate } from "react-router-dom";

export default function MujerPage() {
  const navigate = useNavigate();

  return (
    <main className="home">
      <div className="home-inner">
        <span className="home-eyebrow">ESSENZA · MUJER</span>

        <h1 className="home-title">
          Identidad.
          <br />
          Atracción.
          <br />
          Esencia.
        </h1>

        <p className="home-text">
          Tu aroma habla antes que tú.
          <br />
          Y permanece después.
        </p>

        <button
          className="home-cta"
          onClick={() => navigate("/test")}
        >
          Descubrir mi esencia
        </button>
      </div>
    </main>
  );
}
