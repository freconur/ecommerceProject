import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import { Provider } from "react-redux";
import './index.css'
import thunk from "redux-thunk";
import { logger } from "./middlewares";
import { productsReducer } from "./redux/reducer/productsReducer";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
// import AuthProvider from "../context/AuthContext";
const root = ReactDOM.createRoot(document.getElementById("app"));
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));
const store = createStore(productsReducer, composedEnhancers);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <AuthProvider> */}
      <App />
    {/* </AuthProvider> */}
    </Provider>
  </React.StrictMode>
);
