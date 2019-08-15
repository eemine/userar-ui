import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";
import { error as errorNotification } from "react-notification-system-redux";

const middlewares = applyMiddleware(thunkMiddleware);
const store = createStore(reducers, composeWithDevTools(middlewares));

axios.interceptors.response.use(
  response => response,
  error => {
    let message,
      title = "Something went wrong";

    if (error.response.status === 401) {
      localStorage.removeItem("user");
      store.dispatch({
        type: "LOGOUT"
      });
      message = error.response.data.error;
      title = "Token expired";
    }

    store.dispatch(
      errorNotification({
        title,
        message,
        position: "tc"
      })
    );
  }
);

const savedUser = localStorage.getItem("user");
if (savedUser) {
  axios.defaults.headers.common["Authorization"] = savedUser;
  store.dispatch({
    type: "LOGIN_SUCCESS",
    payload: { token: savedUser }
  });
}

export default store;
