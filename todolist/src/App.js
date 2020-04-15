import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

class App extends Component {
	constructor() {
		super();
		this.state = {
			todoitems: [
				{ title: "Mua bim bim", isComplete: true },
				{ title: "Đi đá bóng", isComplete: false },
				{ title: "Xem phim", isComplete: false },
			],
		};
		this.onItemClicked = this.onItemClicked.bind(this);
	}

	onItemClicked(item) {
		return (event) => {
			const isComplete = item.isComplete;
			const { todoitems } = this.state;
			const index = todoitems.indexOf(item);
			this.setState({
				todoitems: [
					...todoitems.slice(0, index),
					{
						...item,
						isComplete: !isComplete,
					},
					...todoitems.slice(index + 1),
				],
			});
		};
	}

	render() {
		const { todoitems } = this.state;
		return (
			<div className="App">
				{todoitems.length &&
					todoitems.map((item, index) => (
						<TodoItem
							key={index}
							item={item}
							onClick={this.onItemClicked(item)}
						/>
					))}
			</div>
		);
	}
}

export default App;
