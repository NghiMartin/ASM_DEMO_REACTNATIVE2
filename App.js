import { View } from "react-native";
import InputField from "./src/components/InputField";
import LoginScreen from "./src/screens/auth/LoginScreen";
import SplashScreen from "./src/screens/auth/SplashScreen";
import SignUpScreen from "./src/screens/auth/SignUpScreen";

export default function App() {
  return(
    <View>
     <SignUpScreen/>
    </View>
  )
}