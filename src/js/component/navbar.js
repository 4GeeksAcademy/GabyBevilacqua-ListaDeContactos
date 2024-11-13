import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar justify-content-end">
			<div className="text-end">
				<Link to="/addContact">
					<button className="btn btn-success  me-2">Add new contact</button>
				</Link>
				<Link to="/">
					<button className="btn btn-success">Go to Crear Agenda</button>
				</Link>
			</div>
		</nav>
	);
};
