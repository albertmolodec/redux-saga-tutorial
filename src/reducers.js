import { combineReducers } from "redux";
import { players } from "./players/reducer";

export const rootReducer = combineReducers({ players });
