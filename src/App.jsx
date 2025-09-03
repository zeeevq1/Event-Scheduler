import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { AuthProvider } from "./components/AuthContext";

import { Home, EventDetail } from "./pages";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="events/:id" element={<EventDetail />} />
          {/* Se non sei loggato → vai al login */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Accesso libero */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-event"
            element={
              <ProtectedRoute>
                <CreateEvent />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
