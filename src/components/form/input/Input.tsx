type InputProps = {
  name: string;
  label: string;
  type: string;
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

  return (
    <div className="form-group w-full">
      <label
        className="block text-gray-700 font-normal text-base mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        className={inputClass}
        type={type}
        placeholder={value || label}
        disabled={disabled}
        {...register(name, {})}
        {...props}
      />
      <p className="text-red-500 text-xs italic">{error}</p>
    </div>
  );
};

export default Input;
