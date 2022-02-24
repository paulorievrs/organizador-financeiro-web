import { AxiosResponse } from "axios";
import React, { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import api from "../services/api";
import { useLoading } from "./LoadingContext";

type AuthContextProps = {
  children: React.ReactNode;
};

export type LoginProps = {
  email: string;
  password: string;
};

export type RegisterProps = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

type User = {
  id: number;
  name: string;
  email: string;
};

type LoginResponse = {
  data: {
    access_token: string;
    token_type: string;
    expires_in: number;
    user: User;
  };
  status: number;
};

type RegisterResponse = {
  data: User;
  status: number;
};

type AuthContextType = {
  token: string;
  user: object;
  signed: boolean;
  Login: (data: LoginProps) => Promise<LoginResponse>;
  Register: (data: RegisterProps) => Promise<RegisterResponse>;
  Logout: () => void;
  verifyAuth: () => void;
};

const defaultLoginResponse: LoginResponse = {
  data: {
    access_token: "",
    token_type: "",
    expires_in: 0,
    user: { id: 0, name: "", email: "" }
  },
  status: 0
};

const defaultRegisterResponse: RegisterResponse = {
  data: { id: 0, name: "", email: "" },
  status: 0
};

const AuthContext = createContext<AuthContextType>({
  token: "",
  user: {},
  signed: false,
  Login: () => new Promise((__, _) => defaultLoginResponse),
  Register: () => new Promise((__, _) => defaultRegisterResponse),
  Logout: () => {},
  verifyAuth: () => {}
});

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [token, setToken] = useLocalStorage("token", "");
  const [user, setUser] = useLocalStorage("user", {});
  const [signed, setSigned] = useLocalStorage("signed", false);

  const { loading, setLoading } = useLoading();

  useEffect(() => {
    if (!token) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  const verifyAuth = () => {
    setLoading(true);
    try {
      api.get("/auth/me").then((response: AxiosResponse) => {
        setUser(response.data);
        setSigned(true);
      });

      return true;
    } catch (e) {
      Logout();
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const tokenLocal = localStorage.getItem("token");
    if (tokenLocal && tokenLocal !== "null") {
      verifyAuth();
    } else if (signed && !tokenLocal) {
      setSigned(false);
      Logout();
    }
  }, []);

  const Login = async ({
    email,
    password
  }: LoginProps): Promise<LoginResponse> => {
    setLoading(true);
    localStorage.clear();

    try {
      const response = await api.post("/auth/login", {
        email,
        password
      });

      setUser(response.data.user);
      setToken(response.data.access_token);

      setSigned(true);
      setLoading(false);
      return response;
    } catch (error: any) {
      setSigned(false);
      setLoading(false);
      return error.response;
    }
  };

  const Register = async ({
    name,
    email,
    password,
    passwordConfirm
  }: RegisterProps): Promise<RegisterResponse> => {
    setLoading(true);
    localStorage.clear();

    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
        passwordConfirm
      });

      setLoading(false);

      return response;
    } catch (error: any) {
      setSigned(false);
      setLoading(false);
      return error.response;
    }
  };

  const Logout = async () => {
    setLoading(true);
    await api
      .post("/auth/logout", {})
      .finally(() => {
        localStorage.clear();
        setSigned(false);
      })
      .finally(() => setLoading(false));
  };

  const contextData: AuthContextType = {
    signed,
    Login,
    Logout,
    token,
    user,
    verifyAuth,
    Register
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
