import { StyleSheet, Text, View } from "react-native";

import Input from "./Input";

const ExpensesForm = () => {
  function amountChangeHandler(params) {}

  function dateChangeHandler(params) {}

  function dateChangeHandler(params) {}

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: dateChangeHandler,
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: amountChangeHandler,
        }}
      />
    </View>
  );
};

export default ExpensesForm;

const styles = StyleSheet.create({});
