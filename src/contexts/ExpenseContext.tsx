import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

type ExpenseContextProps = {
  children: React.ReactNode;
};

type ExpenseType = {
  id: number;
  name: "" | "fixed" | "variable";
};

type ExpenseContextType = {
  expensesTypes: ExpenseType[];
};

const ExpenseContext = createContext<ExpenseContextType>({
  expensesTypes: [{ name: "", id: 0 }]
});

type ExpenseTypeApi = {
  name: string;
  id: number;
};

export const ExpenseProvider = ({ children }: ExpenseContextProps) => {
  const [expensesTypes, setExpensesTypes] = useState<ExpenseType[]>([
    { name: "", id: 0 }
  ]);

  const fetchExpensesType = async () => {
    const expensesTypes = await api.get("/expenses/types");
    console.log("expenses types", expensesTypes.data);
    const map = expensesTypes.data.map(
      ({ name, id }: ExpenseTypeApi) =>
        ({
          name,
          id
        } as ExpenseType)
    );

    setExpensesTypes(map);
  };

  useEffect(() => {
    fetchExpensesType();
  }, []);

  const contextData: ExpenseContextType = {
    expensesTypes
  };

  return (
    <ExpenseContext.Provider value={contextData}>
      {children}
    </ExpenseContext.Provider>
  );
};

export function useExpenseContext() {
  return useContext(ExpenseContext);
}
