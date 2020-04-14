import React from "react";

function TodoItem(props) {
	return (
		<tr>
			<td>{props.item.Company}</td>
			<td>{props.item.Contact}</td>
			<td>{props.item.Country}</td>
		</tr>
	);
}

export default TodoItem;
