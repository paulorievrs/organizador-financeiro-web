type ButtonProps = {
  label: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  color?: string;
  icon?: React.ReactNode;
  textColor?: string;
};

const Button = ({
  label,
  type = "submit",
  color = "bg-primary",
  icon,
  textColor = "text-white"
}: ButtonProps) => {
  return (
    <button
      className={`${color} ${textColor} p-4 w-full rounded-lg font-semibold flex flex-row items-center justify-center gap-3`}
      type={type}
    >
      <span>{label}</span>
      {icon}
    </button>
  );
};

export default Button;
