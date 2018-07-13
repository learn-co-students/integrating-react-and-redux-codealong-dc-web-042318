export function changeCount(state = { counter: 0 }, action) {
	switch (action.type) {
		case "INCREASE_COUNTER":
			return { ...state, counter: state.counter + 1 };
		default:
			return state;
	}
}
