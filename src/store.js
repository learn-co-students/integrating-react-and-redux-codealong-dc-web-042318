import { createStore } from "redux";
import { changeCount } from "./reducers/changeCount";
const store = createStore(
	changeCount,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
