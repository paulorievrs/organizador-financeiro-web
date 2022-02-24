import { useState } from "react";
import HideEyeClosed from "../../images/HideEyeClosed";

export type InputProps = {
  name: string;
  label: string;
  type: "text" | "password" | "date" | "number" | "month" | "email";
  error: string;
  register: Function;
  disabled?: boolean;
  value?: string;
  onChange?: Function;
};

const Input = function ({
  name,
  label,
  type,
  error,
  register,
  disabled = false,
  value = "",
  ...props
}: InputProps) {
  let inputClass =
    "leading-5 h-12 rounded-lg text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none";

  if (error) {
    inputClass = `${inputClass} border border-red-300 bg-red-light`;
  } else {
    inputClass = `${inputClass} bg-gray-light`;
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form-group w-full">
      <label
        className="block text-gray-700 font-normal text-base mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          className={inputClass}
          type={showPassword ? "text" : type}
          placeholder={value || label}
          disabled={disabled}
          autoComplete={name}
          {...register(name, {})}
          {...props}
        />
        {type === "password" && (
          <span
            className="font-extrabold absolute ml-auto right-0 mt-5 mr-3 text-center cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            <HideEyeClosed />
          </span>
        )}
      </div>

      <p className="text-red-500 text-xs italic">{error}</p>
    </div>
  );
};

export default Input;
