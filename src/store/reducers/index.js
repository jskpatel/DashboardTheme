import { combineReducers } from "redux";
import PersistReducer from "./persist";

export default combineReducers({ persist: PersistReducer });
