type TextProps = {
  children?: React.ReactNode;
  className?: string;
  size?:
    | "text-xs"
    | "text-sm"
    | "text-base"
    | "text-lg"
    | "text-xl"
    | "text-2xl"
    | "text-3xl";
  weigth?:
    | "font-bold"
    | "font-normal"
    | "font-thin"
    | "font-light"
    | "font-semibold"
    | "font-medium"
    | "font-bold"
    | "font-extrabold"
    | "font-extralight";
};

const TitleText = ({
  children,
  className = "",
  size = "text-2xl",
  weigth = "font-semibold"
}: TextProps) => {
  return <span className={`${className} ${weigth} ${size}`}>{children}</span>;
};

export default TitleText;
