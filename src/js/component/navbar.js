import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar justify-content-end">
			<div className="text-end">
				<Link to="/addContact">
					<button className="btn btn-secondary  me-2" style={{ backgroundColor: "rgb(76, 63, 104)"}}>Add new contact</button>
				</Link>
				<Link to="/">
					<button className="btn btn-secondary" style={{ backgroundColor: "rgb(76, 63, 104)"}}>Go to Crear Agenda</button>
				</Link>
			</div>
		</nav>
	);
};
