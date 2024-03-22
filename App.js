import { Provider } from "react-redux";
import AppRouters from "./src/navigators/AppRouters";
import { store } from "./src/store/store";
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from "./src/navigators/MainNavigator";
import AuthNavigator from "./src/navigators/AuthNavigator";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <AppRouters />
        </NavigationContainer>
      </Provider>
    </>

  )
}