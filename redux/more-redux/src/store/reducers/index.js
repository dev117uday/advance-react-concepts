import counterReducer from "./counter";
import loggerReducer from "./isLogged";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
	counter : counterReducer,
	isLogged : loggerReducer
});

export default rootReducer;

