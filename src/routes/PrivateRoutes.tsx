import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const PrivateRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<h1>Logado</h1>} />
      </Routes>
    </Router>
  );
};

export default PrivateRoutes;
