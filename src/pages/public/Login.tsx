import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as z from "zod";
import Button from "../../components/form/button/Button";
import Input from "../../components/form/input/Input";
import Deskguy from "../../components/images/Deskguy";
import Header from "../../components/pages/auth/header/Header";
import LinkText from "../../components/texts/LinkText";
import { useAuth } from "../../contexts/AuthContext";

const schema = z.object({
  email: z.string().email({ message: "Digite um e-mail" }),
  password: z.string().nonempty({ message: "Digite a senha" })
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange"
  });

  const [errorText, setErrorText] = useState("");

  const navigate = useNavigate();
  const { Login } = useAuth();

  const sendLoginData = async (email: string, password: string) => {
    setErrorText("");
    const response = await Login({ email, password });
    navigate("/");
    if (response?.status === 401) {
      setErrorText("E-mail e/ou senha incorretos.");
    } else if (response?.status === 500) {
      setErrorText("Ocorreu um erro ao tentar fazer login.");
    }
  };

  return (
    <>
      <div className="w-screen flex justify-center">
        <div className="w-full flex flex-row h-screen">
          <div className="bg-white max-w-md w-full flex flex-col justify-center px-12 mt-28 md:mt-0">
            <Header
              title="Login"
              onClickDiscord={() => setErrorText("Funcionalidade indisponivel")}
            />
            <form
              onSubmit={handleSubmit(({ email, password }) =>
                sendLoginData(email, password)
              )}
            >
              <div className="pt-7">
                <div className="flex items-center justify-center pb-4">
                  <p className="text-red-500 text-xs italic">{errorText}</p>
                </div>
                <div className="mb-6">
                  <Input
                    type="text"
                    error={errors.email?.message}
                    name="email"
                    label="E-mail"
                    value="Digite seu e-mail"
                    onChange={() => setErrorText("")}
                    register={register}
                  />
                </div>
                <div className="mb-6">
                  <Input
                    name="password"
                    label="Senha"
                    type="password"
                    value="Digite sua senha"
                    error={errors.password?.message}
                    onChange={() => setErrorText("")}
                    register={register}
                  />
                </div>
              </div>
              <div className="flex flex-row items-end justify-end">
                <LinkText to={""} label="Esqueceu sua senha?" />
              </div>
              <Button label="Logar" />

              <div className="flex flex-row items-center justify-center pt-7">
                <span>
                  Não tem uma conta?{" "}
                  <LinkText
                    to="/cadastro"
                    label="Nova conta"
                    size="text-base"
                  />
                </span>
              </div>
            </form>
          </div>

          <div className="bg-gray-light w-full items-center justify-center h-full hidden sm:hidden md:flex">
            <Deskguy />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
