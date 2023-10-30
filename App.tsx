import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LandingPage from "./screens/landingPage";
import SignupPage from "./screens/signup-page";

export default function App() {
  return <LandingPage />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#007bff", // Set the background color of the button
    borderRadius: 8, // Optional: Adds border radius for rounded corners
    padding: 10, // Optional: Adds padding inside the button
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "stretch", // or "stretch" depending on your design preference
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
