import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { logger } from "../middlewares";
import rootReducer from "./reducer/rootReducer";

// const middleware = [thunk]
// if(process.env.NODE_ENV === "development") {
//     middleware.push(logger)
// }

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));
// const composedEnhancers = composeAlt(applyMiddleware(...middleware));
const store = createStore(rootReducer, composedEnhancers);

export default store