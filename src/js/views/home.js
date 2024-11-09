import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { ContactCard } from "../component/contactCard";
import { Navbar } from "../component/navbar";

export const Home = () => {
	return (

		<div className="container">
			<Navbar/>
			<div>
				<ContactCard />
				<ContactCard />
				<ContactCard />
				<ContactCard />
			</div>
		</div>
	)
};

