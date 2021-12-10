import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import HomeScreen from "./Screens/HomeScreen";

const inintialState = {
  action: "openMenu",
};

const reducer = (state = inintialState, action) => {
  switch (action.type) {
    case "CLOSE_MENU":
      return { action: "closeMenu" };
    case "OPEN_MENU":
      return { action: "openMenu" };
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
