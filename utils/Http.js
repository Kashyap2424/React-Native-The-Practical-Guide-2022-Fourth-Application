import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-project-55a2e-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
