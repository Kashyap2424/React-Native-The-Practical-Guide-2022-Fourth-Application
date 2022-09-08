import { StyleSheet, Text, View } from "react-native";

import ExpensesOutput from "../Components/ExpensesOutput/ExpensesOutput";

const AllExpenses = () => {
  return <ExpensesOutput expensesPeriodName="Total" />;
};

export default AllExpenses;

const styles = StyleSheet.create({});
