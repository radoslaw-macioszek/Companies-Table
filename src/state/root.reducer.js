import { combineReducers } from "redux";

import tableReducer from "./table/table.reducer";

const reducers = {
	tableReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
