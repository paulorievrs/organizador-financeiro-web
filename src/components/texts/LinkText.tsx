import { Link } from "react-router-dom";

type LinkTextProps = {
  size?: "text-sm" | "text-base" | "text-lg" | "text-xl" | "text-2xl";
  color?: "text-primary" | "text-gray-light" | "text-white" | "text-black";
  label?: string;
  to: string;
};

const LinkText = ({
  size = "text-sm",
  color = "text-primary",
  label,
  to
}: LinkTextProps) => {
  return (
    <Link
      to={to}
      className={`${size} ${color} pb-10 cursor-pointer transition duration-150 hover:opacity-70`}
    >
      {label}
    </Link>
  );
};

export default LinkText;
