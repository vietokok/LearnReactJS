import React from "react";

function Form() {
	return (
		<div className="Form">
			<div className="form-group">
				<label htmlFor="name">Username</label>
				<input type="email" className="form-control" id="name" />
			</div>
			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input type="password" className="form-control" id="password" />
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</div>
	);
}

export default Form;
