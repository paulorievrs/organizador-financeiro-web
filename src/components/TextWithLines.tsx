type TextWithLinesProps = {
  children: React.ReactNode;
};

const TextWithLines = ({ children }: TextWithLinesProps) => {
  return (
    <p className="flex flex-row  before:flex-1 before:border before:border-gray-light before:m-auto before:mr-10px after:flex-1 after:border after:border-gray-light after:m-auto after:ml-10px font-semibold">
      {children}
    </p>
  );
};

export default TextWithLines;
