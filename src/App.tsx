import { AuthProvider } from "./contexts/AuthContext";
import Routes from "./routes/Routes";

const App = function () {
  return (
    <AuthProvider>
      <div className="font-nunito h-screen">
        <Routes />
      </div>
    </AuthProvider>
  );
};

export default App;
