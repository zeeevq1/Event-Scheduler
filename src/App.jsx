import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./components/AuthContext";

import { Home, EventDetail } from "./pages";
//import Home from "./pages/Home";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

//import CreateEvent from "./pages/CreateEvent";

import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="events/:id" element={<EventDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
