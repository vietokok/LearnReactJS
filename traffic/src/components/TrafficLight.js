import React, { Component } from "react";
import "./TrafficLight.css";
import cx from "classnames";

const GREEN = 0;
const ORANGE = 1;
const RED = 2;
class TrafficLight extends Component {
	constructor() {
		super();
		this.state = {
			currentColor: GREEN,
		};

		setInterval(() => {
			this.setState({
				currentColor: this.getNextColor(this.state.currentColor),
			});
		}, 1000);
	}

	getNextColor(color) {
		switch (color) {
			case GREEN:
				return ORANGE;
			case ORANGE:
				return RED;
			default:
				return GREEN;
		}
	}

	render() {
		return (
			<div className="TrafficLight">
				<div
					className={cx("light", "green", {
						active: this.state.currentColor === GREEN,
					})}
				></div>
				<div
					className={cx("light", "orange", {
						active: this.state.currentColor === ORANGE,
					})}
				></div>
				<div
					className={cx("light", "red", {
						active: this.state.currentColor === RED,
					})}
				></div>
			</div>
		);
	}
}

export default TrafficLight;
