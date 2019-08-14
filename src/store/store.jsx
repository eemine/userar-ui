import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";

const middlewares = applyMiddleware(thunkMiddleware);
const store = createStore(reducers, composeWithDevTools(middlewares));

const savedUser = localStorage.getItem("user");
if (savedUser) {
  axios.defaults.headers.common["Authorization"] = savedUser;
  store.dispatch({
    type: "LOGIN_SUCCESS",
    payload: { token: savedUser }
  });
}

export default store;
