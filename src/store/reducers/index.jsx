import { combineReducers } from "redux";
import { reducer as notifications } from "react-notification-system-redux";
import isRegistered from "./registration";
import user from "./user";
import mediaList from "./mediaList";
import post from "./post";

export default combineReducers({
  notifications,
  isRegistered,
  user,
  mediaList,
  post
});
