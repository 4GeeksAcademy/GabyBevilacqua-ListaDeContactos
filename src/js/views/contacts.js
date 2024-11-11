import React from "react";
import { ContactCard } from "../component/contactCard";
import { Navbar } from "../component/navbar";

export const Contacts = () => {
	return (

		<div className="container">
			<Navbar/>
			<div>
				<ContactCard />
		
			</div>
		</div>
	)
};