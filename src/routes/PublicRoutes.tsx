import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import Login from '../pages/public/Login';

const PublicRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
    </Router>
  );
};

export default PublicRoutes;