import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Scholarships from "./pages/Scholarships";
import Jobs from "./pages/Jobs";
import Research from "./pages/Research";
import Community from "./pages/Community";

import Login from "./pages/Login";
import Signup from "./pages/Register";

import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      {/* All main pages inside MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/research" element={<Research />} />
        <Route path="/community" element={<Community />} />
      </Route>

      {/* Authentication pages outside MainLayout */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  );
}

export default App;
