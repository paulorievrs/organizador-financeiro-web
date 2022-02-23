import { AxiosResponse } from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import api from "../services/api";

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

type AuthContextType = {
  token: string;
  user: object;
  signed: boolean;
  loading: boolean;
  Login: (data: LoginProps) => any;
  Register: (data: RegisterProps) => any;
  Logout: () => void;
  verifyAuth: () => void;
};

const AuthContext = createContext<AuthContextType>({
  token: "",
  user: {},
  signed: false,
  loading: false,
  Login: () => ({ status: 0 }),
  Register: () => ({ status: 0 }),
  Logout: () => {},
  verifyAuth: () => {}
});

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [token, setToken] = useLocalStorage("token", "");
  const [user, setUser] = useLocalStorage("user", {});
  const [signed, setSigned] = useLocalStorage("signed", false);

  const [loading, setLoading] = useState(false);

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

  const Login = async ({ email, password }: LoginProps) => {
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
  }: RegisterProps) => {
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
    loading,
    Register
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
