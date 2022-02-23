type TextProps = {
  children?: React.ReactNode,
  className?: string
}

const TitleText = ({ children, className = '' }: TextProps) => {
  return <span className={`${className} font-semibold text-2xl`}>{children}</span>
};

export default TitleText;