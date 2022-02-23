import LoadingImg from "../../assets/loading.gif";

type LoadingProps = {
  loading: boolean;
};

const Loading = ({ loading }: LoadingProps) => {
  if (!loading) return null;

  return (
    <div className="bg-white bg-opacity-50 fixed left-0 top-0 flex inset-0 z-50 select-none">
      <div className="flex justify-center items-center w-full h-screen">
        <img draggable={false} src={LoadingImg} alt="Loading" width={"150px"} />
      </div>
    </div>
  );
};

export default Loading;
