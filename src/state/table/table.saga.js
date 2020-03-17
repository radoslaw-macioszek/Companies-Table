import { takeLatest, call, put, select, all } from "redux-saga/effects";
import axios from "axios";
import { LOAD_TABLE_DATA, LOAD_TABLE_VALUE } from "./table.reducer";
import {
	loadTableDataSuccess,
	loadTableValueSuccess,
	loadTableFailed
} from "./table.reducer";

function* loadIncomes() {
	const ids = yield select(state => state.tableReducer.data);

	const requests = ids.map(id =>
		call(axios.get, `https://recruitment.hal.skygate.io/incomes/${id.id}`)
	);
	const responses = yield all(requests);

	const datas = responses.map(response => response.data);

	const incomesMap = datas.reduce((acc, data) => {
		const sortedIncomes = data.incomes.sort(
			(a, b) => new Date(a.date) - new Date(b.date)
		);
		const lastDate = new Date(sortedIncomes[sortedIncomes.length - 1].date);
		const lastMonth = lastDate.getMonth();
		const lastYear = lastDate.getFullYear();
		const lastMonthSum = data.incomes
			.filter(income => {
				const incomeDate = new Date(income.date);
				if (
					incomeDate.getMonth() === lastMonth &&
					incomeDate.getFullYear() === lastYear
				) {
					return true;
				}
				return false;
			})
			.reduce((sum, income) => {
				return sum + parseFloat(income.value);
			}, 0);

		const januaryCurrentYearValues = data.incomes
			.filter(income => {
				const incomeDate = new Date(income.date);
				if (incomeDate.getMonth() === 0 && incomeDate.getFullYear() === 2020) {
					return true;
				}
				return false;
			})
			.reduce((sum, income) => {
				return sum + parseFloat(income.value);
			}, 0);

		const februaryCurrentYearValues = data.incomes
			.filter(income => {
				const incomeDate = new Date(income.date);
				if (incomeDate.getMonth() === 1 && incomeDate.getFullYear() === 2020) {
					return true;
				}
				return false;
			})
			.reduce((sum, income) => {
				return sum + parseFloat(income.value);
			}, 0);

		const marchCurrentYearValues = data.incomes
			.filter(income => {
				const incomeDate = new Date(income.date);
				if (incomeDate.getMonth() === 2 && incomeDate.getFullYear() === 2020) {
					return true;
				}
				return false;
			})
			.reduce((sum, income) => {
				return sum + parseFloat(income.value);
			}, 0);

		const januaryValues = data.incomes
			.filter(income => {
				const incomeDate = new Date(income.date);
				if (incomeDate.getMonth() === 0 && incomeDate.getFullYear() === 2019) {
					return true;
				}
				return false;
			})
			.reduce((sum, income) => {
				return sum + parseFloat(income.value);
			}, 0);

		const februaryValues = data.incomes
			.filter(income => {
				const incomeDate = new Date(income.date);
				if (incomeDate.getMonth() === 1 && incomeDate.getFullYear() === 2019) {
					return true;
				}
				return false;
			})
			.reduce((sum, income) => {
				return sum + parseFloat(income.value);
			}, 0);

		const marchValues = data.incomes
			.filter(income => {
				const incomeDate = new Date(income.date);
				if (incomeDate.getMonth() === 2 && incomeDate.getFullYear() === 2019) {
					return true;
				}
				return false;
			})
			.reduce((sum, income) => {
				return sum + parseFloat(income.value);
			}, 0);

		const aprilValues = data.incomes
			.filter(income => {
				const incomeDate = new Date(income.date);
				if (incomeDate.getMonth() === 3 && incomeDate.getFullYear() === 2019) {
					return true;
				}
				return false;
			})
			.reduce((sum, income) => {
				return sum + parseFloat(income.value);
			}, 0);

		const mayValues = data.incomes
			.filter(income => {
				const incomeDate = new Date(income.date);
				if (incomeDate.getMonth() === 4 && incomeDate.getFullYear() === 2019) {
					return true;
				}
				return false;
			})
			.reduce((sum, income) => {
				return sum + parseFloat(income.value);
			}, 0);

		const juneValues = data.incomes
			.filter(income => {
				const incomeDate = new Date(income.date);
				if (incomeDate.getMonth() === 5 && incomeDate.getFullYear() === 2019) {
					return true;
				}
				return false;
			})
			.reduce((sum, income) => {
				return sum + parseFloat(income.value);
			}, 0);

		const julyValues = data.incomes
			.filter(income => {
				const incomeDate = new Date(income.date);
				if (incomeDate.getMonth() === 6 && incomeDate.getFullYear() === 2019) {
					return true;
				}
				return false;
			})
			.reduce((sum, income) => {
				return sum + parseFloat(income.value);
			}, 0);

		const augustValues = data.incomes
			.filter(income => {
				const incomeDate = new Date(income.date);
				if (incomeDate.getMonth() === 7 && incomeDate.getFullYear() === 2019) {
					return true;
				}
				return false;
			})
			.reduce((sum, income) => {
				return sum + parseFloat(income.value);
			}, 0);

		const septemberValues = data.incomes
			.filter(income => {
				const incomeDate = new Date(income.date);
				if (incomeDate.getMonth() === 8 && incomeDate.getFullYear() === 2019) {
					return true;
				}
				return false;
			})
			.reduce((sum, income) => {
				return sum + parseFloat(income.value);
			}, 0);

		const octoberValues = data.incomes
			.filter(income => {
				const incomeDate = new Date(income.date);
				if (incomeDate.getMonth() === 9 && incomeDate.getFullYear() === 2019) {
					return true;
				}
				return false;
			})
			.reduce((sum, income) => {
				return sum + parseFloat(income.value);
			}, 0);

		const novemberValues = data.incomes
			.filter(income => {
				const incomeDate = new Date(income.date);
				if (incomeDate.getMonth() === 10 && incomeDate.getFullYear() === 2019) {
					return true;
				}
				return false;
			})
			.reduce((sum, income) => {
				return sum + parseFloat(income.value);
			}, 0);

		const decemberValues = data.incomes
			.filter(income => {
				const incomeDate = new Date(income.date);
				if (incomeDate.getMonth() === 11 && incomeDate.getFullYear() === 2019) {
					return true;
				}
				return false;
			})
			.reduce((sum, income) => {
				return sum + parseFloat(income.value);
			}, 0);

		return {
			...acc,
			[data.id]: {
				incomes: data.incomes,
				total: Math.round(
					data.incomes.reduce((sum, income) => {
						return sum + parseFloat(income.value);
					}, 0)
				),
				average: Math.round(
					data.incomes.reduce((sum, income) => {
						return sum + parseFloat(income.value);
					}, 0) / data.incomes.length
				),
				lastMonth: Math.round(lastMonthSum),

				currentYear: {
					january: Math.round(januaryCurrentYearValues),
					february: Math.round(februaryCurrentYearValues),
					march: Math.round(marchCurrentYearValues)
				},
				previousYear: {
					january: Math.round(januaryValues),
					february: Math.round(februaryValues),
					march: Math.round(marchValues),
					april: Math.round(aprilValues),
					may: Math.round(mayValues),
					june: Math.round(juneValues),
					july: Math.round(julyValues),
					august: Math.round(augustValues),
					september: Math.round(septemberValues),
					october: Math.round(octoberValues),
					november: Math.round(novemberValues),
					december: Math.round(decemberValues)
				}
			}
		};
	}, {});

	const fullInfos = ids.map(fullInfo => {
		return {
			...fullInfo,
			...incomesMap[fullInfo.id]
		};
	});

	const sortedFullInfo = fullInfos.sort((a, b) => b.total - a.total);

	if (incomesMap) {
		yield put(loadTableValueSuccess(fullInfos));
		return;
	}
	yield put(loadTableFailed());
}

function* loadCompanies() {
	const dataResponse = yield call(
		axios.get,
		"https://recruitment.hal.skygate.io/companies"
	);

	if (dataResponse.status === 200) {
		yield put(loadTableDataSuccess(dataResponse.data));
		return;
	}

	yield put(loadTableFailed());
}

export default function* tablesSaga() {
	yield takeLatest(LOAD_TABLE_DATA, loadCompanies);
	yield takeLatest(LOAD_TABLE_VALUE, loadIncomes);
}
