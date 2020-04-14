import React, { Component } from "react";

class Menu extends Component {
	render() {
		return (
			<li className="nav-item">
				<p>{this.props.item.icon}</p>
				<a className="nav-link active" href="www.google.com.vn">
					{this.props.item.content}
				</a>
			</li>
		);
	}
}

export default Menu;
