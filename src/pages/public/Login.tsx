import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Button from "../../components/form/Button";
import Input from "../../components/form/input/Input";
import AppLogo from "../../components/images/AppLogo";
import Deskguy from "../../components/images/Deskguy";
import DiscordLogo from "../../components/images/DiscordLogo";
import TitleText from "../../components/TitleText";

const schema = z.object({
  email: z.string().email({ message: "Digite um e-mail" }),
  password: z.string().nonempty({ message: "Digite a senha" })
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange"
  });

  const sendLoginData = (email: string, password: string) => {};

  return (
    <div className="w-screen flex justify-center">
      <div className="w-full flex flex-row h-screen">
        <div className="bg-white max-w-md w-full flex flex-col justify-center px-12">
          <div className="flex flex-col justify-center items-center">
            <AppLogo />
            <TitleText className="mt-10 mb-10">Login</TitleText>
            <Button
              label="Logar"
              icon={<DiscordLogo width="26px" height="26px" />}
              color="bg-gray-light"
              textColor="text-dark"
            />
          </div>
          <form
            onSubmit={handleSubmit(({ email, password }) =>
              sendLoginData(email, password)
            )}
          >
            <div className="pt-7">
              <div className="mb-6">
                <Input
                  type="text"
                  error={errors.email?.message}
                  name="email"
                  label="E-mail"
                  register={register}
                />
              </div>
              <div className="mb-6">
                <Input
                  name="password"
                  label="Senha"
                  type="password"
                  error={errors.password?.message}
                  register={register}
                />
              </div>
            </div>
            <div className="flex flex-row items-end justify-end">
              <span className="text-primary text-sm pb-10 cursor-pointer transition duration-150 hover:opacity-70">
                Esqueceu a senha?
              </span>
            </div>
            <Button label="Logar" />

            <div className="flex flex-row items-center justify-center pt-7">
              <span>
                Não tem uma conta?{" "}
                <span className="text-primary">Nova conta</span>
              </span>
            </div>
          </form>
        </div>

        <div className="bg-gray-light w-full flex items-center justify-center h-full">
          <Deskguy />
        </div>
      </div>
    </div>
  );
};

export default Login;
