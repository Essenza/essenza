import { useNavigate } from "react-router-dom";

export default function HombrePage() {
  const navigate = useNavigate();

  return (
    <main className="home">
      <div className="home-inner">
        <span className="home-eyebrow">ESSENZA · HOMBRE</span>

        <h1 className="home-title">
          Presencia.
          <br />
          Carácter.
          <br />
          Intensidad.
        </h1>

        <p className="home-text">
          No todos los perfumes están hechos para todos.
          <br />
          Algunos exigen personalidad.
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
