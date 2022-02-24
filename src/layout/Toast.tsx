import XIcon from "../components/images/XIcon";

const Toast = () => {
  return (
    <div className="min-h-20 shadow-lg absolute right-0 mr-10 mt-5 border-8 border-primary">
      <div className="p-5 flex flex-col justify-between">
        <div className="flex flex-row justify-between items-center gap-10">
          <span className="text-lg font-bold">Aviso</span>
          <XIcon width="20" height="20" />
        </div>
        <div className="pt-5">
          <span>Ocorreu um erro ao enviar dados</span>
        </div>
      </div>
    </div>
  );
};

export default Toast;
