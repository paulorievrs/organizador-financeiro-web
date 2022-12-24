import { InputProps } from "../input/Input";

const DateInput = ({
  label,
  name,
  value,
  onChange,
  disabled,
  height = "h-12",
  error,
  bgColor,
  type = "date",
  register = () => {},
  ...props
}: InputProps) => {
  let inputClass = `leading-5 ${height} rounded-lg text-sm appearance-none rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`;

  if (error) {
    inputClass = `${inputClass} border border-red-300 bg-red-light`;
  } else {
    inputClass = `${inputClass} ${bgColor}`;
  }

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
          type={"date"}
          placeholder={value || label}
          disabled={disabled}
          autoComplete={name}
          onChange={onChange}
          value={value || ""}
          {...register(name, {})}
          {...props}
        />
      </div>

      <p className="text-red-500 text-xs italic">{error}</p>
    </div>
  );
};

export default DateInput;
