import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../utils/styles";

const ErrorOverlay = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occured!</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  text: {
    color: GlobalStyles.colors.primary800,
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary800,
  },
  message: {
    fontSize: 14,
  },
});
