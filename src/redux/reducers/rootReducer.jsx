import { combineReducers } from "redux";
import { cityReducer } from "./cityReducer";
import { answersReducer } from "./answersReducer";

export const rootReducer = combineReducers({
    city: cityReducer,
    answers: answersReducer
});