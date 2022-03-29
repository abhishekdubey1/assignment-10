import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </StrictMode>,
  rootElement
);
