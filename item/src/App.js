import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Header from "./components/Header";
import Title from "./components/TItle";
import Form from "./components/Form";
import Menu from "./components/Menu";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ImageTable from "./components/ImageTable";

class App extends Component {
	constructor() {
		super();
		this.dataList = [
			{
				Company: "Alfreds Futterkiste",
				Contact: "Maria Anders",
				Country: "Germany",
			},
			{
				Company: "Centro comercial Moctezuma",
				Contact: "Francisco Chang",
				Country: "Mexico",
			},
			{
				Company: "Mexico",
				Contact: "Mexico",
				Country: "Austria",
			},
		];
		this.dataMenu = [
			{
				icon: "icon1",
				content: "Menu",
			},
			{
				icon: "icon2",
				content: "Deals",
			},
			{
				icon: "icon3",
				content: "Upload",
			},
			{
				icon: "icon4",
				content: "Work",
			},
			{
				icon: "icon5",
				content: "Settings",
			},
		];
		this.dataImage = [
			{
				link1: "http://bit.ly/3ayPusa",
				link2: "http://bit.ly/3ayPusa",
				link3: "http://bit.ly/3ayPusa",
			},
			{
				link1: "http://bit.ly/3ayPusa",
				link2: "http://bit.ly/3ayPusa",
				link3: "http://bit.ly/3ayPusa",
			},
			{
				link1: "http://bit.ly/3ayPusa",
				link2: "http://bit.ly/3ayPusa",
				link3: "http://bit.ly/3ayPusa",
			},
		];
	}
	render() {
		return (
			<div className="App">
				<div className="container">
					<div className="mb-3">
						<Header />
					</div>
					<div className="mb-3">
						<ul className="nav justify-content-center">
							{this.dataMenu.map((item, index) => (
								<Menu key={index} item={item} />
							))}
						</ul>
					</div>
					<div className="mb-3">
						<Title />
					</div>
					<div className="mb-3">
						<Form />
					</div>
					<div className="mb-3">
						<table>
							<thead>
								<tr>
									<th>Copany</th>
									<th>Contact</th>
									<th>Country</th>
								</tr>
							</thead>
							<tbody>
								{this.dataList.map((item, index) => (
									<TodoItem key={index} item={item} />
								))}
							</tbody>
						</table>
					</div>
					<div className="mb-3">
						<ImageTable data={this.dataImage} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
