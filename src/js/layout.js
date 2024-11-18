import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { CreateAgenda } from "./views/createAgenda";
import { Contacts } from "./views/contacts";
import { AddContact } from "./views/addContact";
import injectContext from "./store/appContext";
import { EditContact } from "./views/editContact";

const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<CreateAgenda />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/addContact" element={<AddContact />} />
						<Route path="/editContact/:id" element={<EditContact />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
