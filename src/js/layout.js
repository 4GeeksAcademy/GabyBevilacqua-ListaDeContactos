import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { CreateAgenda } from "./views/createAgenda";
import { Contacts } from "./views/contacts";
import { AddContact } from "./views/addContact";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
// import { Context } from "../store/appContext";

// import { Navbar } from "./component/navbar";
import { EditContact } from "./views/editContact";
// import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	/* const {store, actions} = useContext[Context]

	useEffect{ () =>{
		actions.fetchAgenda()
		
		}, []}

	*/

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<CreateAgenda />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/addContact" element={<AddContact />} />
						<Route path="/editContact" element={<EditContact />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
