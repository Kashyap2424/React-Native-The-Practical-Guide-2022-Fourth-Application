import { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import ExpensesOutput from "../Components/ExpensesOutput/ExpensesOutput";
import ErrorOverlay from "../Components/Ui/ErrorOverlay";
import LoadingOverlay from "../Components/Ui/LoadingOverlay";
import { ExpensesContext } from "../Store/Expenses-context";
import { getDateMinusDays } from "../utils/Date";
import { fetchExpenses } from "../utils/Http";

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  const expensesContext = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        expensesContext.setExpenses(expenses);
      } catch (error) {
        setError("Could not fetch expenses!");
      }
      setIsFetching(false);
    }

    getExpenses();
  }, []);

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

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
