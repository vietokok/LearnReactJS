import React, { Component } from 'react';
import './TodoItem.css';
import Check from '../images/check.svg';
import UnCheck from '../images/uncheck.svg';
import cx from 'classnames';

class TodoItem extends Component {
	render() {
		const { item, onClick, deleteItem } = this.props;
		let url = UnCheck;
		item.isComplete && (url = Check);

		return (
			<div className="TodoItem">
				<img
					onClick={onClick}
					className="icon"
					src={url}
					alt="Can't load data"
				/>
				<div
					className={cx('content', {
						done: item.isComplete,
					})}
				>
					{item.title}
				</div>
				<span className="delete" onClick={deleteItem}>
					x
				</span>
			</div>
		);
	}
}

export default TodoItem;
