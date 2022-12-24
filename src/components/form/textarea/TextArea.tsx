export type TextAreaProps = {
  name: string;
  label?: string;
  error?: string;
  register?: Function;
  disabled?: boolean;
  value?: string;
  onChange?: Function;
  bgColor?: string;
  height?: string;
};

const TextArea = function ({
  name,
  label,
  error,
  register = () => {},
  disabled = false,
  value = "",
  bgColor = "bg-gray-light",
  height = "h-12",
  ...props
}: TextAreaProps) {
  let inputClass = `leading-5 resize-none ${height} rounded-[10px] text-sm appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none`;

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
        <textarea
          id={name}
          className={inputClass}
          placeholder={value || label}
          disabled={disabled}
          autoComplete={name}
          {...register(name, {})}
          {...props}
        ></textarea>
      </div>

      <p className="text-red-500 text-xs italic">{error}</p>
    </div>
  );
};

export default TextArea;
