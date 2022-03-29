import { useState } from "react";
import HideEyeClosed from "../../images/HideEyeClosed";

export type InputProps = {
  name: string;
  label?: string;
  type: "text" | "password" | "date" | "number" | "month" | "email";
  error?: string;
  register?: Function;
  disabled?: boolean;
  value?: string;
  onChange?: Function;
  bgColor?: string;
  height?: string;
  placeholder?: string;
};

const Input = function ({
  name,
  label,
  type,
  error,
  register = () => {},
  disabled = false,
  value = "",
  bgColor = "bg-gray-light",
  height = "h-12",
  onChange = () => {},
  placeholder = "",
  ...props
}: InputProps) {
  let inputClass = `leading-5 ${height} rounded-lg text-sm appearance-none rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`;

  if (error) {
    inputClass = `${inputClass} border border-red-300 bg-red-light`;
  } else {
    inputClass = `${inputClass} ${bgColor}`;
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form-group w-full">
      {label && (
        <label
          className="block text-gray-700 font-semibold text-base mb-2"
          htmlFor={name}
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={name}
          className={inputClass}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={name}
          onChange={onChange}
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
