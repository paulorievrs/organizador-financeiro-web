import Button from "../../components/form/button/Button";
import Input from "../../components/form/input/Input";
import PlusIcon from "../../components/images/PlusIcon";
import TitleText from "../../components/texts/TitleText";

const Dashboard = () => {
  return (
    <div className="p-8">
      <div className="relative flex flex-col items-center md:block">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <TitleText>Gastos gerais</TitleText>
          <div className="flex flex-col md:flex-row pt-5 md:pt-0 justify-center items-center gap-5">
            <Input
              name={"start_date"}
              bgColor={"bg-white"}
              type={"date"}
              height={"h-10"}
            />
            <Input
              name={"end_date"}
              bgColor={"bg-white"}
              type={"date"}
              height={"h-10"}
            />
          </div>
        </div>
        <div className=" md:absolute md:right-0 mt-7">
          <Button
            label={"Adicionar Gasto"}
            icon={<PlusIcon />}
            height={"h-10"}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
