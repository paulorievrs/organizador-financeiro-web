type ButtonProps = {
  label: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  color?: "bg-primary" | "bg-gray-light" | "bg-white";
  icon?: React.ReactNode;
  textColor?: string;
  onClick?: () => void;
};

const Button = ({
  label,
  type = "submit",
  color = "bg-primary",
  icon,
  textColor = "text-white",
  onClick = () => {}
}: ButtonProps) => {
  return (
    <button
      className={`${color} ${textColor} p-4 w-full rounded-lg font-semibold flex flex-row items-center justify-center gap-3 duration-200 hover:opacity-80`}
      type={type}
      onClick={onClick}
    >
      <span>{label}</span>
      {icon}
    </button>
  );
};

export default Button;
