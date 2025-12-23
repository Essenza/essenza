// src/pages/HomePage.tsx
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
            <strong>HOMBRE</strong>
            <span>Carácter · Intensidad · Presencia</span>
          </button>

          <button
            className="gender-button"
            onClick={() => handleSelectGender("mujer")}
          >
            <strong>MUJER</strong>
            <span>Identidad · Atracción · Esencia</span>
          </button>
        </div>
      </div>
    </main>
  );
}
