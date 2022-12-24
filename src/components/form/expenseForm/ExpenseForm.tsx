import {
  ExpenseProvider,
  useExpenseContext
} from "../../../contexts/ExpenseContext";
import Input from "../input/Input";
import Select from "../select/Select";
import TextArea from "../textarea/TextArea";

const ExpenseForm = () => {
  const expenseContext = useExpenseContext();
  console.log("expenses ypeee", expenseContext.expensesTypes);
  return (
    <ExpenseProvider>
      <TextArea name={"description"} height={"h-28"} label="Descrição" />
      <Input
        name={"price"}
        type={"number"}
        height={"h-10"}
        label={"Preço"}
        placeholder={"Preço"}
      />
      <Input name={"date"} type={"date"} height={"h-10"} label={"Data"} />
      <Input
        name={"deadline"}
        type={"date"}
        height={"h-10"}
        label={"Data de vencimento"}
      />

      <Select
        name={"deadline"}
        type={"date"}
        height={"h-10"}
        label={"Tipo de gasto"}
        options={expenseContext.expensesTypes}
      />
    </ExpenseProvider>
  );
};

export default ExpenseForm;
