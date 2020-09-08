import { combineRecuders } from "redux";
import user from "./reducer_user";
import goals from "./reducer_goals";

export default combineRecuders({
  user,
  goals,
});
