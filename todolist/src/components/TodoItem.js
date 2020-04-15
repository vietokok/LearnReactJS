import React, { Component } from "react";
import cx from "classnames";
import "./TodoItem.css";
import Done from "../imgs/right.svg";
import NotDone from "../imgs/correct.svg";

class TodoItem extends Component {
	render() {
		const { item, onClick } = this.props;
		let url = Done;
		item.isComplete && (url = NotDone);

		return (
			<div className="TodoItem">
				<img onClick={onClick} src={url} alt="none" width={32} />
				<p
					className={cx({
						done: item.isComplete === true,
					})}
				>
					{item.title}
				</p>
			</div>
		);
	}
}

export default TodoItem;
