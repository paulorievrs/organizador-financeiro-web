import ArrowLeft from "../images/ArrowLeft";
import TitleText from "../texts/TitleText";

type LateralModalPropType = {
  children: React.ReactNode;
  title: string;
  isOpened: boolean;
  onClose: () => void;
};

const LateralModal = ({
  children,
  title,
  isOpened = false,
  onClose = () => {}
}: LateralModalPropType) => {
  if (!isOpened) return null;

  return (
    <div className="bg-slate-400 bg-opacity-50 fixed left-0 top-0 flex inset-0 z-50 select-none">
      <div className="absolute right-0 bg-white w-96 h-screen">
        <div className="pl-5 pt-10 pb-4 cursor-pointer" onClick={onClose}>
          <ArrowLeft />
        </div>
        <div className="flex flex-col justify-center items-center mb-12">
          <TitleText size="text-lg">{title}</TitleText>
        </div>
        <div className="pr-6 pl-8 flex flex-col justify-between items-center gap-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LateralModal;
