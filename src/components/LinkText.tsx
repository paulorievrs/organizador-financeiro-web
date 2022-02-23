type LinkTextProps = {
  size?: string;
  color?: string;
  label?: string;
};

const LinkText = ({
  size = "text-sm",
  color = "text-primary",
  label
}: LinkTextProps) => {
  return (
    <span
      className={`${size} ${color} pb-10 cursor-pointer transition duration-150 hover:opacity-70`}
    >
      {label}
    </span>
  );
};

export default LinkText;
