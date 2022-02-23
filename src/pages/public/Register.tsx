import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Button from "../../components/form/button/Button";
import Input, { InputProps } from "../../components/form/input/Input";
import DeskguyRegister from "../../components/images/DeskguyRegister";
import SuccessImage from "../../components/images/SuccessImg";
import Loading from "../../components/loading/Loading";
import Modal from "../../components/modal/Modal";
import Header from "../../components/pages/auth/header/Header";
import LinkText from "../../components/texts/LinkText";
import TitleText from "../../components/texts/TitleText";
import { useAuth } from "../../contexts/AuthContext";

const schema = z
  .object({
    name: z.string().nonempty({ message: "Digite seu nome completo" }),
    email: z.string().email({ message: "Digite um e-mail válido" }),
    password: z.string().nonempty({ message: "Digite a senha" }),
    passwordConfirm: z
      .string()
      .nonempty({ message: "Digite a confirmação de senha" })
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "As senhas não conferem",
    path: ["passwordConfirm"]
  })
  .refine((data) => validateName(data.name), {
    message: "Digite um nome completo valido",
    path: ["name"]
  });

const validateName = (name: string) => {
  if (name.length < 3) {
    return false;
  }
  if (!name.split(" ")[1]) {
    return false;
  }
  if (name.split(" ")[1] && name.split(" ").length <= 2) {
    return false;
  }

  return true;
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange"
  });

  type inputTypes = {
    name: string;
    label: string;
    value: string;
    type: InputProps["type"];
  };

  const registerInputs: inputTypes[] = [
    {
      name: "name",
      label: "Nome completo",
      value: "Digite seu nome completo",
      type: "text"
    },
    {
      name: "email",
      label: "E-mail",
      value: "Digite seu e-mail",
      type: "text"
    },
    {
      name: "password",
      label: "Senha",
      value: "Digite sua senha",
      type: "password"
    },
    {
      name: "passwordConfirm",
      label: "Confirmar Senha",
      value: "Redigite sua senha",
      type: "password"
    }
  ];
  const [errorText, setErrorText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { Login, Register, loading } = useAuth();

  const sendLoginData = async (
    name: string,
    email: string,
    password: string,
    passwordConfirm: string
  ) => {
    setErrorText("");
    const response = await Register({ name, email, password, passwordConfirm });
    if (response?.status !== 200 && response?.status !== 201) {
      setErrorText("Ocorreu um erro ao tentar fazer registro.");
      return;
    }
    setEmail(email);
    setPassword(password);
    setShowModal(true);
  };

  const loginRegistered = async () => {
    setShowModal(false);
    const response = await Login({ email, password });
    if (response?.status !== 200 && response?.status !== 201) {
      reset();
      setShowModal(false);
      setErrorText("Ocorreu um erro ao tentar fazer login.");
      return;
    }
  };

  return (
    <>
      <Loading loading={loading} />
      <Modal isOpen={showModal}>
        <div className="flex flex-col items-center justify-center gap-14">
          <SuccessImage />
          <TitleText>
            Registrado com sucesso! Você será autenticado automaticamente.
          </TitleText>
          <Button label="Prosseguir" onClick={loginRegistered} />
        </div>
      </Modal>
      <div className="w-screen flex justify-center min-h-full">
        <div className="w-full flex flex-row">
          <div className="bg-white max-w-md w-full flex flex-col justify-center px-12 mt-28 md:mt-0">
            <Header
              title="Cadastro"
              onClickDiscord={() => setErrorText("Funcionalidade indisponivel")}
            />
            <form
              onSubmit={handleSubmit(
                ({ name, email, password, passwordConfirm }) =>
                  sendLoginData(name, email, password, passwordConfirm)
              )}
            >
              <div className="pt-5">
                <div className="flex items-center justify-center pb-4">
                  <p className="text-red-500 text-xs italic">{errorText}</p>
                </div>
                {registerInputs.map((input) => (
                  <div className="mb-6">
                    <Input
                      key={input.name}
                      type={input.type}
                      error={errors[input.name]?.message}
                      name={input.name}
                      label={input.label}
                      value={input.value}
                      onChange={() => setErrorText("")}
                      register={register}
                    />
                  </div>
                ))}
              </div>
              <Button label="Criar conta" />

              <div className="flex flex-row items-center justify-center pt-7">
                <span>
                  Já tem uma conta?{" "}
                  <LinkText to={"/login"} label="Log in" size="text-base" />
                </span>
              </div>
            </form>
          </div>

          <div className="bg-gray-light w-full items-center justify-center h-full hidden sm:hidden md:flex">
            <DeskguyRegister />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
