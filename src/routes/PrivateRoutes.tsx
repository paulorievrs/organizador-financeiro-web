import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../layout/private/Layout";
import Dashboard from "../pages/private/Dashboard";

const PrivateRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default PrivateRoutes;
