import { StyleSheet, View, Text } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../utils/styles";

const ExpensesOutput = ({ expenses, expensesPeriodName, fallBackText }) => {
  let content = <Text style={styles.infoText}>{fallBackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriodName} />
      {content}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  infoText: {
    color: GlobalStyles.colors.primary700,
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
