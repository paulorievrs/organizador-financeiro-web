type ButtonProps = {
  label: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  color?: "bg-primary" | "bg-gray-light" | "bg-white";
  icon?: React.ReactNode;
  textColor?: string;
  height?: string;
  onClick?: () => void;
};

const Button = ({
  label,
  type = "submit",
  color = "bg-primary",
  icon,
  textColor = "text-white",
  height = "h-12",
  onClick = () => {}
}: ButtonProps) => {
  return (
    <button
      className={`${color} ${textColor} ${height} p-4 w-full rounded-[10px] font-semibold flex flex-row items-center justify-center gap-3 duration-200 hover:opacity-80`}
      type={type}
      onClick={onClick}
    >
      {icon}

      <span>{label}</span>
    </button>
  );
};

export default Button;
