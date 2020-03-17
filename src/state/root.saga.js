import { fork } from "redux-saga/effects";

import tablesSaga from "./table/table.saga";

export default function* rootSaga() {
	yield fork(tablesSaga);
}
