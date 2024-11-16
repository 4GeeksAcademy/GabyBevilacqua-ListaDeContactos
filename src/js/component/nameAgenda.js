import React, { Component, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const NameAgenda = () => {
    const { store, actions } = useContext(Context);
    const [agendaSlug, setAgendaSlug] = useState("");
    const [fetchAgenda, setFetchAgenda] = useState("");
    const navigate = useNavigate() 

    
    const handleSubmit = (e) => {
        if (agendaSlug) {

            console.log("funcion save")
            e.preventDefault();
            actions.createAgenda(agendaSlug).then(() => {navigate("/addContact")});
        }
    };
    
    const handleFetch = (e) => {
        e.preventDefault();
        actions.fetchContacts(fetchAgenda).then(() => {navigate("/contacts")});
    };    

    return (
        <>
            <form onSubmit={handleSubmit} className="row g-3 justify-content-center mt-2">
                <div className="col-auto">
                    <label htmlFor="agendaSlug" className="form-label pt-1">Agenda nueva:</label>
                </div>
                <div className="col-4">
                    <input
                        type="text"
                        className="form-control"
                        id="agendaSlug"
                        value={agendaSlug}
                        onChange={(e) => setAgendaSlug(e.target.value)}
                        placeholder="Escoge un nombre para tu agenda"
                    />
                </div>
                <div className="col-auto">   
                        <button type="submit" className="btn btn-primary mb-3">Save agenda and go to new contact</button>            
                </div>
            </form>

            <form onSubmit={handleFetch} className="row g-3 justify-content-center mt-2">   {/*cuando pongo handleFetch me da error*/}
                <div className="col-auto">
                    <label htmlFor="fetchAgenda" className="form-label pt-1">Ir a agenda:</label>
                </div>
                <div className="col-4">
                    <input
                        type="text"
                        className="form-control"
                        id="fetchAgenda"
                        value={fetchAgenda}
                        onChange={(e) => setFetchAgenda(e.target.value)}
                        placeholder="Pon el nombre de tu agenda"
                    />
                </div>
                <div className="col-auto">   
                        <button type="submit" className="btn btn-primary mb-3">Go to contacts</button>            
                </div>
            </form>
            
                <div className="mt-3 d-flex">
                    <p className="me-4"><strong>Agenda Creada:</strong></p>
                    <p className="me-4">Slug: {store.agenda.slug}</p>
                    <p>ID: {store.agenda.id}</p>
                </div>
           

        </>
    )
}
/*
                <div className="col-auto">
                    <Link to="/contacts" className="btn btn-primary mb-3">
                        Go to contacts
                    </Link>
                </div>
*/
