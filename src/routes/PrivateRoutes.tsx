import {
  BrowserRouter as Router, Routes
} from 'react-router-dom';

const PrivateRoutes = () => {
  return (
    <Router>
        <Routes>
            {/* <Route path="*" element={<Login />} /> */}
        </Routes>
    </Router>
  );
};

export default PrivateRoutes;