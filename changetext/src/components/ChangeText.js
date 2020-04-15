import React, { Component } from "react";

class ChangeText extends Component {
	constructor() {
		super();
		this.state = {
			value: "",
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		return (
			<div>
				<p>{this.state.value}</p>
				<input onChange={this.handleChange} type="text" />
			</div>
		);
	}
}

export default ChangeText;
