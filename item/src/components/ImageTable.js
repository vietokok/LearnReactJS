import React, { Component } from "react";

class ImageTable extends Component {
	render() {
		const { data } = this.props;

		return (
			data.length > 0 && (
				<table className="table">
					<thead>
						<tr>
							<th>Column image 1</th>
							<th>Column image 2</th>
							<th>Column image 3</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item) => (
							<tr>
								<td>
									<img className="w-100" src={item.link1} alt="done" />
								</td>
								<td>
									<img className="w-100" src={item.link2} alt="done" />
								</td>
								<td>
									<img className="w-100" src={item.link3} alt="done" />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)
		);
	}
}

export default ImageTable;
