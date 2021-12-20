import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../Screens/HomeScreen";
import SectionScreen from "../Screens/SectionScreen";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Section: SectionScreen,
  },
  {
    mode: "modal",
  }
);

export default createAppContainer(AppNavigator);
