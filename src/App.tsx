// src/App.tsx
import { Routes, Route, useNavigate } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import HombrePage from "./pages/HombrePage";
import MujerPage from "./pages/MujerPage";
import TestPage from "./pages/TestPage";
import ResultPage from "./pages/ResultPage";
import PerfumePersonalidadPage from "./pages/PerfumePersonalidadPage";

import type { TestResult } from "./logic/profileEngine";

export default function App() {
  const navigate = useNavigate();

  // Se ejecuta al finalizar el test
  const handleTestFinish = (result: TestResult) => {
    sessionStorage.setItem("essenza-result", JSON.stringify(result));

    navigate("/resultado", {
      state: result
    });
  };

  return (
    <Routes>
      {/* HOME · Elección */}
      <Route path="/" element={<HomePage />} /> 

      {/* INTERMEDIA HOMBRE */}
      <Route path="/hombre" element={<HombrePage />} />

      {/* INTERMEDIA MUJER */}
      <Route path="/mujer" element={<MujerPage />} />

      {/* TEST */}
      <Route
        path="/test"
        element={<TestPage onFinish={handleTestFinish} />}
      />

      {/* RESULTADO */}
      <Route path="/resultado" element={<ResultPage />} />

      {/* PÁGINA PILAR SEO */}
      <Route
        path="/perfume-segun-personalidad"
        element={<PerfumePersonalidadPage />}
      />
    </Routes>
  );
}
