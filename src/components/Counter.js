import React from "react";
import store from "../store";
import { connect } from "react-redux";

const Counter = props => {
	return (
		<div>
			<button
				onClick={() => store.dispatch({ type: "INCREASE_COUNTER" })}
			>
				Click Me
			</button>
			<div>{props.counter}</div>
		</div>
	);
};

const mapStateToProps = state => {
	return { counter: state.counter };
};

export default connect(mapStateToProps)(Counter);
