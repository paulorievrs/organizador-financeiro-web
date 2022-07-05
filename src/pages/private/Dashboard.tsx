import { useState } from "react";
import DateRange from "../../components/dateRange/DateRange";
import Button from "../../components/form/button/Button";
import ExpenseForm from "../../components/form/expenseForm/ExpenseForm";
import HorizontalBarChart from "../../components/graphs/horizontalBarChart/HorizontalBarChart";
import LineGraph from "../../components/graphs/lineGraph/LineGraph";
import PlusIcon from "../../components/images/PlusIcon";
import LateralModal from "../../components/lateralModal/LateralModal";
import TitleText from "../../components/texts/TitleText";

const Dashboard = () => {
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const hideExpenseModal = () => setShowExpenseModal(false);
  const openExpenseModal = () => setShowExpenseModal(true);

  return (
    <>
      <div className="p-8">
        <div className="flex flex-col items-center md:block">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <TitleText weigth="font-bold">Gastos gerais</TitleText>
            <DateRange />
          </div>
          <div className="flex justify-end mt-7 pb-9">
            <div>
              <Button
                label={"Adicionar Gasto"}
                icon={<PlusIcon />}
                height={"h-10"}
                onClick={openExpenseModal}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full gap-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-8">
              <div className="bg-white shadow-sm h-44 w-full">
                <LineGraph
                  data={[31, 23, 15, 33, 55, 24, 70]}
                  borderColor={"rgba(91, 147, 255, 1)"}
                  backgroundColor={"rgba(91, 147, 255, 1)"}
                />
              </div>
              <div className="bg-white shadow-sm h-44 w-full">
                <LineGraph
                  data={[31, 23, 15, 33, 55, 24, 70]}
                  borderColor={"rgba(255, 214, 107, 1)"}
                  backgroundColor={"rgba(255, 214, 107, 1)"}
                />
              </div>
            </div>
            <div className="bg-white shadow-sm h-full w-full"></div>
          </div>
          <div className="flex flex-col gap-8 w-full">
            <div className="bg-white shadow-sm h-full w-full">
              <HorizontalBarChart />
            </div>
            <div className="bg-white shadow-sm h-full w-full">
              {" "}
              <LineGraph
                data={[31, 23, 15, 33, 55, 24, 70]}
                borderColor={"rgba(255, 214, 107, 1)"}
                backgroundColor={"rgba(255, 214, 107, 1)"}
              />
            </div>
          </div>
        </div>
      </div>
      <LateralModal
        isOpened={showExpenseModal}
        onClose={hideExpenseModal}
        title="Adicionar Gasto"
      >
        <ExpenseForm />
      </LateralModal>
    </>
  );
};

export default Dashboard;
