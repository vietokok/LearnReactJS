import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ChangeText from "./components/ChangeText";
import DisplayState from "./components/DisplayState";

class App extends Component {
	constructor() {
		super();
		this.state = {
			display: "block",
		};

		this.onClickButton = this.onClickButton.bind(this);
	}

	onClickButton() {
		this.setState({
			display: this.state.display == "block" ? "none" : "block",
		});
	}

	render() {
		return (
			<div className="App">
				<ChangeText />
				<DisplayState
					display={this.state.display}
					onClick={this.onClickButton}
				/>
			</div>
		);
	}
}

export default App;
