import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import ExpensesOutput from "../Components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../Store/Expenses-context";
import { getDateMinusDays } from "../utils/Date";

const RecentExpenses = () => {
  const expensesContext = useContext(ExpensesContext);

  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAngo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAngo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriodName="Last 7 Days"
    />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
