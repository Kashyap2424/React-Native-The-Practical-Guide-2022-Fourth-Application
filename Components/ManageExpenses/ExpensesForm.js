import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Input from "./Input";
import Button from "../Ui/Button";

const ExpensesForm = ({ submitButtonLabel, onCancel, onSubmit }) => {
  const [inputValue, setInputValue] = useState({
    amount: "",
    date: "",
    description: "",
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValue((currentInputValues) => {
      return { ...currentInputValues, [inputIdentifier]: enteredValue };
    });
  }

  function submitHandler() {}

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValue.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValue.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValue.description,
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpensesForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginBottom: 8,
    marginHorizontal: 8,
  },
});
