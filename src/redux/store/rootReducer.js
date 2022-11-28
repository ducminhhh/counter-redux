import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../slice/counter";

export default combineReducers({
    counter: counterReducer,
});
