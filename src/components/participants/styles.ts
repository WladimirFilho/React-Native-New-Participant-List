import { StyleSheet } from "react-native";

/// Styles - participants

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    flex: 1,
    color: "white",
    marginLeft: 16,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: "#D63939",
  },

  buttonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
