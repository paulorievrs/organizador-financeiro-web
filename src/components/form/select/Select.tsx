import { getInputClass } from "../formUtils";
import { InputProps } from "../input/Input";

const Select = ({
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
  options = [],
  ...props
}: InputProps) => {
  const inputClass = getInputClass(height, bgColor, error);
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

      <select
        id={name}
        className={inputClass}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={name}
        onChange={onChange}
        {...register(name, {})}
        {...props}
      >
        {options.map((option) => (
          <option value={option.id}>{option.name}</option>
        ))}
      </select>
      <p className="text-red-500 text-xs italic">{error}</p>
    </div>
  );
};

export default Select;
