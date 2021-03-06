import { combineReducers } from "redux";
import users from "./users";
import questions from "./questions";
import authedUser from "./auth";

export default combineReducers({
  users,
  questions,
  authedUser,
});
