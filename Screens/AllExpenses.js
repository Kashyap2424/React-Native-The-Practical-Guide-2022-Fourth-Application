import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import ExpensesOutput from "../Components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../Store/Expenses-context";

const AllExpenses = () => {
  const expensesContext = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expensesContext.expenses}
      expensesPeriodName="Total"
    />
  );
};

export default AllExpenses;

const styles = StyleSheet.create({});
