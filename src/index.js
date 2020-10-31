import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { compostWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import App from "./components/App";

const store = createStore(
  rootReducer,
  compostWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
