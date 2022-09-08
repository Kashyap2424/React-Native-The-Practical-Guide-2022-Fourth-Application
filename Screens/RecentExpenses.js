import { StyleSheet, Text, View } from "react-native";

import ExpensesOutput from "../Components/ExpensesOutput/ExpensesOutput";

const RecentExpenses = () => {
  return <ExpensesOutput expensesPeriodName="Last 7 Days" />;
};

export default RecentExpenses;

const styles = StyleSheet.create({});
