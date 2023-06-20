import { StatusBar } from "react-native";
import { Home } from "./src/screens/home";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
}
