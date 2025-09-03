import { BrowserRouter, Routes, Route } from "react-router";


import { Home } from "./pages";
//import Home from "./pages/Home";
// import EventDetail from "./pages/EventDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

//import CreateEvent from "./pages/CreateEvent";

import CreateEvent from "./pages/CreateEvent";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;




