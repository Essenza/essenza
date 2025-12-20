// src/pages/HomePage.tsx
type Props = {
  onStart: () => void;
};

export default function HomePage({ onStart }: Props) {
  return (
    <main className="home">
      <div className="home-inner">
        <span className="home-eyebrow">ESSENZA</span>

        <h1 className="home-title">
          No eliges un perfume.
          <br />
          Dejas una huella.
        </h1>

        <p className="home-text">
          Algunas personas pasan desapercibidas.
          <br />
          Otras transforman el ambiente sin decir una palabra.
          <br />
          Este test revela en qué lado estás.
        </p>

        <button className="home-cta" onClick={onStart}>
          Descubrir mi esencia
        </button>

        <p className="home-meta">
          Test privado · 6 preguntas · 2 minutos
        </p>
      </div>
    </main>
  );
}
