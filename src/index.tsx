import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/App";

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
