import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';


const Routes = () => {

  const signed = false;

  return (
    signed ? <PrivateRoutes /> : <PublicRoutes />
  );
  
};

export default Routes;