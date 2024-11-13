const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: [],
			agenda: {
				slug: "",
				id: null
			}
		},
		actions: {
			// Use getActions to call a function within a fuction

			exampleFunction: () => {
				getActions().createAgenda(0, "green");
			},
			loadSomeData: () => {

			},
			createAgenda: async (name) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${name}`, {

						method: "POST",
						headers: { "Content-Type": "application/json" }
					});

					if (!response.ok) {
						throw new error("error creando agenda")
					}


				} catch (error) {

				}
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const addContact = store.addContact.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ addContact: addContact });
			},

			/* createContact : async () => {
				try {
				const response = await fetch (url, {
				method: "POST",
				body: JSON.stringify{
				Contacts
				},

				})
				}
			} 
				*/
		}
	};
};

export default getState;
