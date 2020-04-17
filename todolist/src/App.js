import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import Arrow from './images/arrow.svg';

class App extends Component {
	constructor() {
		super();
		this.state = {
			newItem: '',
			show: 'all',
			todoItems: [],
		};
		// Assign objects to functions
		this.onKeyUp = this.onKeyUp.bind(this);
		this.onChange = this.onChange.bind(this);
		this.checkAll = this.checkAll.bind(this);
		this.clearCompleted = this.clearCompleted.bind(this);
	}
	// To check and uncheck a task
	onItemClicked(item) {
		const isComplete = item.isComplete;
		const { todoItems } = this.state;
		const index = todoItems.indexOf(item);
		// closure
		return (event) => {
			this.setState({
				newItem: '',
				todoItems: [
					...todoItems.slice(0, index),
					{
						...item,
						isComplete: !isComplete,
					},
					...todoItems.slice(index + 1),
				],
			});
		};
	}

	// To restore input value
	onChange(event) {
		this.setState({
			newItem: event.target.value,
		});
	}

	// To check if enter be press then add new task
	onKeyUp(event) {
		// enter keycode
		if (event.keyCode === 13) {
			let text = event.target.value;

			if (!text.trim()) {
				return;
			}

			this.setState({
				newItem: '',
				todoItems: [
					{ title: text, isComplete: false },
					...this.state.todoItems,
				],
			});
		}
	}

	// To delete when clicked in button x
	deleteItem(item) {
		const { todoItems } = this.state;
		const index = todoItems.indexOf(item);

		return (event) => {
			this.setState({
				todoItems: [
					...todoItems.slice(0, index),
					...todoItems.slice(index + 1),
				],
			});
		};
	}

	// To check all task or uncheck all task
	checkAll() {
		let { todoItems } = this.state;
		if (todoItems.length > 0) {
			// checking any task not complete
			const check = todoItems.some((item) => item.isComplete === false);
			if (check) {
				todoItems.map((value) => (value.isComplete = true));
			} else {
				todoItems.map((value) => (value.isComplete = false));
			}

			this.setState({
				todoItems: [...todoItems],
			});
		}
	}

	// Change the way data is displayed
	show(option) {
		return () => {
			this.setState({
				show: option,
			});
		};
	}

	// to delete all checked item
	clearCompleted() {
		const { todoItems } = this.state;
		const filterData = todoItems.filter((item) => item.isComplete === false);

		this.setState({
			newItem: '',
			show: 'all',
			todoItems: [...filterData],
		});
	}

	render() {
		// destructuring
		const { todoItems, newItem, show } = this.state;
		let data;
		// display data following keyword
		switch (show) {
			case 'active':
				data = todoItems.filter((item) => item.isComplete === false);
				break;
			case 'completed':
				data = todoItems.filter((item) => item.isComplete === true);
				break;
			default:
				data = [...todoItems];
				break;
		}

		// to count how many tasks have not been completed
		const uncheck = todoItems.reduce((number, item) => {
			return item.isComplete === false ? ++number : number;
		}, 0);

		// Check to see if any items have been completed, if true, show clear button
		const checkHasCheckedTask = todoItems.some(
			(item) => item.isComplete === true
		);

		return (
			<div className="App">
				<div className="title">todos</div>
				<div className="todo">
					<div className="header">
						<img
							className="arrow"
							src={Arrow}
							alt="Can't load data"
							onClick={this.checkAll}
						/>
						<input
							type="text"
							value={newItem}
							placeholder="What needs to be done?"
							onKeyUp={this.onKeyUp}
							onChange={this.onChange}
						/>
					</div>
					{data.map((item, index) => (
						<TodoItem
							key={index}
							item={item}
							onClick={this.onItemClicked(item)}
							deleteItem={this.deleteItem(item)}
						/>
					))}
				</div>
				{todoItems.length > 0 && (
					<div className="footer">
						<div className="item-left">{uncheck} items left</div>
						<button className="all" onClick={this.show('all')}>
							All
						</button>
						<button className="active" onClick={this.show('active')}>
							Active
						</button>
						<button className="completed" onClick={this.show('completed')}>
							Completed
						</button>
						{checkHasCheckedTask && (
							<button className="clear" onClick={this.clearCompleted}>
								Clear completed
							</button>
						)}
					</div>
				)}
			</div>
		);
	}
}

export default App;
