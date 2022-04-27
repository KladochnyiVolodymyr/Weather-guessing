import { combineReducers } from "redux";
import { cityReducer } from "./cityReducer";
import { answersReducer } from "./answersReducer";
import { loaderReducer } from "./loaderReducer";

export const rootReducer = combineReducers({
    city: cityReducer,
    answers: answersReducer,
    loader: loaderReducer
});