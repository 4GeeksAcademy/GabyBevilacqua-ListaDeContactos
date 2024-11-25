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
				
				const store = getStore();			
			},

			fetchContacts: async (fetchAgenda) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${fetchAgenda}`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (!response.ok) {

						throw new Error("no se encuentra la agenda")
					}
					const result = await response.json();
					setStore({
						agenda: {
							slug: result.slug,
							id: null
						}, contact: result.contacts
					}) // el primer contact en singular es el mio de arriba y el que esta en plural es el de la api

				} catch (error) {
					console.error("Error al buscar agenda", error);
				}
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

			updateContact: async (agendaSlug, contact, id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts/${id}`, {
						method: "PUT",
						headers: {
							"accept": "application/json",
							"Content-Type": "application/json"
						},
						body: JSON.stringify(contact)
					});
					if (response.ok) {

						const result = await response.json()
						setStore({
							contact: [
								...getStore().contact.map((contact) => {
									if (contact.id == result.id) {
										return result;
									} else {
										return contact;
									}
								}),
							]
						})
					}
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
						setStore({
							contact: getStore().contact.filter(contact => contact.id !== id)
						});
						console.log(`Contacto con ID ${id} eliminado exitosamente.`);
					} else {
						console.error("Error al eliminar contacto en la API:", response.status);
					}
				} catch (error) {
					console.error("Error al eliminar contacto:", error);
				}
			}
		}
	};
};

export default getState;
