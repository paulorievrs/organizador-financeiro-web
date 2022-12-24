import Loading from "../components/loading/Loading";
import { useLoading } from "../contexts/LoadingContext";

const LoadingLayout = () => {
  const { loading } = useLoading();

  return <Loading loading={loading} />;
};
export default LoadingLayout;
