import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Scholarships from "../pages/Scholarships";
import Jobs from "../pages/Jobs";
import Research from "../pages/Research";
import Community from "../pages/Community";
import Login from "../pages/Login";
import Register from "../pages/Register";

function AppRoutes() {
  return (
    <Routes>
      {/* Main Layout routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="scholarships" element={<Scholarships />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="research" element={<Research />} />
        <Route path="community" element={<Community />} />
      </Route>

      {/* Authentication routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;
