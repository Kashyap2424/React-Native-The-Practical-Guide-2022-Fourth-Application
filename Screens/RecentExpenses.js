import { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import ExpensesOutput from "../Components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../Store/Expenses-context";
import { getDateMinusDays } from "../utils/Date";
import { fetchExpenses } from "../utils/Http";

const RecentExpenses = () => {
  const expensesContext = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
    }

    getExpenses();
  }, []);

  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAngo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAngo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriodName="Last 7 Days"
      fallBackText="No expenses registered for the last 7 days."
    />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
