import { AxiosError, AxiosResponse } from "axios";
import React, { createContext, useCallback, useContext, useMemo } from "react";
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
  user: User;
  signed: boolean;
  Login: (data: LoginProps) => Promise<LoginResponse>;
  Register: (data: RegisterProps) => Promise<RegisterResponse>;
  Logout: () => void;
};

const defaultUser = { id: 0, name: "", email: "" };

const defaultLoginResponse: LoginResponse = {
  data: {
    access_token: "",
    token_type: "",
    expires_in: 0,
    user: defaultUser
  },
  status: 0
};

const defaultRegisterResponse: RegisterResponse = {
  data: defaultUser,
  status: 0
};

const AuthContext = createContext<AuthContextType>({
  token: "",
  user: defaultUser,
  signed: false,
  Login: () => new Promise((__, _) => defaultLoginResponse),
  Register: () => new Promise((__, _) => defaultRegisterResponse),
  Logout: () => {}
});

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [token, setToken] = useLocalStorage("token", "");
  const [user, setUser] = useLocalStorage("user", defaultUser);

  const { setLoading } = useLoading();

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

      setLoading(false);
      return response;
    } catch (error: any) {
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
      setLoading(false);
      return error.response;
    }
  };

  const Logout = useCallback(async () => {
    setLoading(true);
    await api
      .post("/auth/logout", {})
      .finally(() => {
        setToken("");
      })
      .finally(() => setLoading(false));
  }, [setLoading, setToken]);

  useMemo(() => {
    api.interceptors.response.use(
      (response: AxiosResponse) => {
        if (response.data && response.data.status === "Token is Expired") {
          Logout();
        }

        return response;
      },
      (error: AxiosError) => {
        if (error.request && error.request.status === 401) {
          Logout();
        }

        return Promise.reject(error);
      }
    );
  }, [Logout]);

  const contextData: AuthContextType = {
    signed: Boolean(token),
    Login,
    Logout,
    token,
    user,
    Register
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
