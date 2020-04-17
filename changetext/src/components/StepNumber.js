import React, { Component } from 'react';
import './StepNumber.css';

class StepNumber extends Component {
	constructor() {
		super();
		this.state = {
			value: 1,
		};

		this.reduceValue = this.reduceValue.bind(this);
		this.increaseValue = this.increaseValue.bind(this);
	}

	reduceValue() {
		this.setState({
			value: this.state.value - 1,
		});
	}

	increaseValue() {
		this.setState({
			value: this.state.value + 1,
		});
	}

	render() {
		return (
			<div className="StepNumber">
				<h2>Step number</h2>
				<div className="container-flex">
					<button onClick={this.reduceValue}>-</button>
					<span>{this.state.value}</span>
					<button onClick={this.increaseValue}>+</button>
				</div>
			</div>
		);
	}
}

export default StepNumber;
