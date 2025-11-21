import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  return (
    <BrowserRouter>
      <Routes>

        {/* Wenn eingeloggt → direkt Dashboard */}
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/dashboard" /> : <Login />
          }
        />

        {/* Dashboard geschützt */}
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? <Dashboard /> : <Navigate to="/" />
          }
        />

        {/* Alles andere → Login */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}