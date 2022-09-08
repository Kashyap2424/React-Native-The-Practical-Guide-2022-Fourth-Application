import { StyleSheet } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const ExpensesOutput = ({ expenses }) => {
  return (
    <>
      <ExpensesSummary />
      <ExpensesList />
    </>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({});
