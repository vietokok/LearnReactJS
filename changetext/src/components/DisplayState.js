import React, { Component } from 'react';
import './DisplayState.css';

class DisplayState extends Component {
	render() {
		const { display, onClick } = this.props;
		return (
			<div className="DisplayState">
				<button onClick={onClick}>Click me</button>
				<div className={display}>You are amazing</div>
			</div>
		);
	}
}

export default DisplayState;
