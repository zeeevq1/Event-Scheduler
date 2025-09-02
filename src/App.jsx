import { BrowserRouter, Routes, Route } from "react-router";

import { Home } from "./pages";
// import EventDetail from "./pages/EventDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
//import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
//     <Route path="/events/:id" element={<EventDetail />} />
//     <Route path="/create" element={<CreateEvent />} />
