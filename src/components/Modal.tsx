import XIcon from "./images/XIcon";
import TitleText from "./TitleText";

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  headerText?: string;
  onClose?: () => void;
};

const Modal = ({ isOpen, children, onClose, headerText = "" }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="bg-gray-900 bg-opacity-50 min-w-screen animated fadeIn faster fixed left-0 top-0 flex items-center justify-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
      <div className="overflow-y-hidden w-full max-w-lg p-5 mt-5 mb-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white h-fit">
        <div className="flex flex-row justify-between items-center pb-4">
          <TitleText>{headerText}</TitleText>
          <XIcon onClick={onClose} />
        </div>
        <div className="overflow-y-scroll border border-gray-light p-5 pb-8">
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
