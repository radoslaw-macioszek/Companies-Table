const name = "TABLE_REDUCER";

export const LOAD_TABLE_DATA = `${name}/LOAD_TABLE_DATA`;
export const LOAD_TABLE_DATA_SUCCESS = `${name}/LOAD_TABLE_DATA_SUCCESS`;
export const LOAD_TABLE_FAILED = `${name}/LOAD_TABLE_FAILED`;
export const LOAD_TABLE_VALUE_SUCCESS = `${name}/LOAD_TABLE_VALUE_SUCCESS`;
export const LOAD_TABLE_VALUE = `${name}/LOAD_TABLE_VALUE`;

export const loadTableDataAction = () => ({
	type: LOAD_TABLE_DATA
});

export const loadTableDataSuccess = data => ({
	type: LOAD_TABLE_DATA_SUCCESS,
	payload: data
});

export const loadTableValueAction = () => ({
	type: LOAD_TABLE_VALUE
});

export const loadTableValueSuccess = values => ({
	type: LOAD_TABLE_VALUE_SUCCESS,
	payload: values
});

export const loadTableFailed = () => ({
	type: LOAD_TABLE_FAILED
});

const INITIAL_STATE = {
	data: [],
	values: [],
	loading: false,
	error: ""
};

const tableReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOAD_TABLE_DATA: {
			return {
				...state,
				loading: true,
				error: ""
			};
		}
		case LOAD_TABLE_DATA_SUCCESS: {
			return {
				...state,
				data: action.payload,
				error: ""
			};
		}
		case LOAD_TABLE_VALUE: {
			return {
				...state,
				loading: true,
				error: ""
			};
		}
		case LOAD_TABLE_VALUE_SUCCESS: {
			return {
				...state,
				values: action.payload,
				loading: false,
				error: ""
			};
		}
		case LOAD_TABLE_FAILED: {
			return {
				...state,
				loading: false,
				error: "table loading error"
			};
		}
		default: {
			return state;
		}
	}
};

export default tableReducer;
