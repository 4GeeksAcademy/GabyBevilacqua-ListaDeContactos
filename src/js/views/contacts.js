import React, { useEffect } from "react";
import { ContactCard } from "../component/contactCard";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";

export const Contacts = () => {

	/* 

	const { store, actions } = useContext();

    useEffect(() => {
        actions.fetchContacts();
    }, []);

	*/

	return (

		<div className="container">
			<Navbar/>
			<div>
				<ContactCard />
		
			</div>
		</div>
	)
};