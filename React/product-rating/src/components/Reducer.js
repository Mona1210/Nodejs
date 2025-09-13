import {combineReducers} from "REDUX";
import inReducer from "./InReducer";
import deReducer from "./DeReducer";

var reducer = combineReducers({
    inReducer,
    deReducer
});

export default reducer;