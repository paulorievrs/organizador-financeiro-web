import { AuthProvider } from "./contexts/AuthContext";
import { LoadingProvider } from "./contexts/LoadingContext";
import LoadingLayout from "./layout/LoadingLayout";
import Routes from "./routes/Routes";

const App = function () {
  return (
    <LoadingProvider>
      <AuthProvider>
        <div className="font-nunito h-screen">
          <LoadingLayout />
          <Routes />
        </div>
      </AuthProvider>
    </LoadingProvider>
  );
};

export default App;
