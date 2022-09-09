import { useLayoutEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../Components/Ui/Button";

import IconButton from "../Components/Ui/IconButton";
import { GlobalStyles } from "../utils/styles";
import { ExpensesContext } from "../Store/Expenses-context";
import ExpensesForm from "../Components/ManageExpenses/ExpensesForm";

const ManageExpense = ({ route, navigation }) => {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, {
        description: "test!!!!!",
        amount: 29.99,
        date: new Date("2022-09-07"),
      });
    } else {
      expensesCtx.addExpense({
        description: "test",
        amount: 19.99,
        date: new Date("2022-09-02"),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpensesForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelHandler}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary500,
    alignItems: "center",
  },
});
