import { StyleSheet } from "react-native";

/// Styles - Home

export const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: "black",
  },
  eventName: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  eventDate: {
    color: "#9A9A9A",
  },

  input: {
    flex: 1,

    padding: 8,
    marginRight: 12,
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 4,

    color: "white",
    fontSize: 16,
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: "#31CF67",
  },

  buttonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },

  form: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 36,
    marginBottom: 42,
  },
  listEmpty: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
