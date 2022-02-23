import { useAuth } from "../contexts/AuthContext";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const Routes = () => {
  const { signed } = useAuth();

  return signed ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Routes;
