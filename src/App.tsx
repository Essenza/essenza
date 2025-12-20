// src/App.tsx
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import ResultPage from "./pages/ResultPage";
import type { TestResult } from "./logic/profileEngine";

export default function App() {
  const navigate = useNavigate();

  // 👉 Se ejecuta al pulsar “Descubrir mi esencia” en el Home
  function handleStartTest() {
    navigate("/test");
  }

  // 👉 Se ejecuta al terminar el test
  function handleTestFinish(result: TestResult) {
    // Guardamos el resultado para refresh / acceso directo
    sessionStorage.setItem(
      "essenza-result",
      JSON.stringify(result)
    );

    // Navegamos al resultado
    navigate("/resultado", {
      state: result
    });
  }

  return (
    <Routes>
      {/* HOME */}
      <Route
        path="/"
        element={<HomePage onStart={handleStartTest} />}
      />

      {/* TEST */}
      <Route
        path="/test"
        element={<TestPage onFinish={handleTestFinish} />}
      />

      {/* RESULTADO */}
      <Route
        path="/resultado"
        element={<ResultPage />}
      />
    </Routes>
  );
}
