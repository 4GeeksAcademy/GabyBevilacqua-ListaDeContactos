const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: [],
			agenda: {
				slug: "", // aqui guardamos el nombre de la agenda
				id: null   // aqui guardamos el id de la agenda despues de crearla
			}
		},
		actions: {

			exampleFunction: () => {
				getActions().createDer("");
			},
			loadSomeData: () => {

			},
			createAgenda: async (agendaSlug) => {
				try {

					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaSlug}`, {

						method: "POST",
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (response.ok) {
						const result = await response.json();

						setStore({
							agenda: {
								slug: result.slug,
								id: result.id
							}
						});
						console.log("Agenda creada exitosamente:", result);
					} else {
						console.error("Error al crear la agenda:", response.statusText);

					}

				} catch (error) {
					console.error("Error en la llamada a la API:", error);
				}
				//get the store
				const store = getStore();

				/*	const addContact = store.contact.map((elm, i) => {
						if (i === index) elm.background = color;
						return elm;
					});*/

				//reset the global store
				// setStore({ agenda: result });
			},

			createContact: async (agendaSlug, contacto) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(contacto)
					});

					if (response.ok) {
						const result = await response.json()
						setStore({
							contact: [
								...getStore().contact,
								result
							]
						})
					}
				} catch (error) {
					console.error("Error en la llamada", error);
				}
			},

			updateContact: async (agendaSlug, contact, id) => {  // no entiendo como definir aqui los parametros correctos la api pide nombre de agenda y el id del contacto
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts/${id}`, {
						method: "PUT",
						headers: {
							"accept": "application/json",
							"Content-Type": "application/json"
						},
						/* -d '{
							 "name": "string",   // como debo colocar esto que sale asi en la API
							"phone": "string",
							"email": "string",
							"address": "string"
							}' 
						*/
						body: JSON.stringify(contact)
					});
					if (response.ok) {

						const result = await response.json()
						setStore({
							contact: [
								...getStore().contact,
								result
							]
						})

					}
					//getActions().fetchContacts();  esto viene de useEffect en appContext linea 24 lo saque de chatGPT debe ir aqui ? en vez de 101 a 107

				} catch (error) {
					console.error("Error al actualizar contacto:", error);
				}
			},

			deleteContact: async (agendaSlug, id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts/${id}`, {
						method: "DELETE",
						headers: {
							"accept": "application/json"
						},
					});
					if (response.ok) {

						const result = await response.json()
						setStore({
							contact: [
								...getStore().contact,
								result
							]
						})
					}
					//	getActions().fetchContacts();  esto viene de useEffect en appContext linea 24 lo saque de chatGPT debe ir aqui ? en vez de 127 a 133
				} catch (error) {
					console.error("Error al eliminar contacto:", error);
				}
			}
		}
	};
};

export default getState;
