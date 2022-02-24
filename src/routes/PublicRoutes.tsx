import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/public/Login";
import RegisterPage from "../pages/public/Register";

const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default PublicRoutes;
