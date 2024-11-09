import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">

			<div className="mb-3 pt-3">
				<label for="fullName" className="form-label">Full Name</label>
				<input type="text" className="form-control" id="fullName" placeholder="Enter Full Namer" />
			</div>
			<div className="mb-3">
				<label for="email" className="form-label">Email</label>
				<input type="email" className="form-control" id="email" placeholder="Enter email" />
			</div>
			<div className="mb-3">
				<label for="phone" className="form-label">Phone</label>
				<input type="tel" className="form-control" id="phone" placeholder="Enter phone" />
			</div>
			<div className="mb-3">
				<label for="address" className="form-label">Address</label>
				<input type="text" className="form-control" id="address" placeholder="Enter address" />
			</div>
			<br />
			<Link to="/">
				<button className="btn btn-primary me-2">Save</button>
			</Link>
			<Link to="/">
				<span className="text">or get back to contact</span>
			</Link>
		</div>
	);
};

/*<ul className="list-group">
{store.demo.map((item, index) => {
	return (
		<li
			key={index}
			className="list-group-item d-flex justify-content-between"
			style={{ background: item.background }}>
			<Link to={"/single/" + index}>
				<span>Link to: {item.title}</span>
			</Link>
			{// Conditional render example
				// Check to see if the background is orange, if so, display the message
				item.background === "orange" ? (
					<p style={{ color: item.initial }}>
						Check store/flux.js scroll to the actions to see the code
					</p>
				) : null}
			<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
				Change Color
			</button>
		</li>
	);
})}
</ul>*/
