import React, { Component, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const NameAgenda = () => {
    const { store, actions } = useContext(Context);
    const [agendaSlug, setAgendaSlug] = useState("");

    const handleSubmit = (e) => {
        console.log("funcion save")
        e.preventDefault();
        actions.createAgenda(agendaSlug);
        
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="row g-3 justify-content-center mt-2">
                <div className="col-auto">
                    <label htmlFor="agendaSlug" className="form-label pt-1">Agenda:</label>
                </div>
                <div className="col-5">
                    <input
                        type="text"
                        className="form-control"
                        id="agendaSulg"
                        value={agendaSlug}
                        onChange={(e) => setAgendaSlug(e.target.value)}
                        placeholder="Escoge un nombre para tu agenda"
                    />
                </div>
                <div className="col-auto">   
                        <button type="submit" className="btn btn-primary mb-3">Save</button>            
                </div>
                <div className="col-auto">
                    <Link to="/contacts" className="btn btn-primary mb-3">
                        Go to contacts
                    </Link>
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
    

*/