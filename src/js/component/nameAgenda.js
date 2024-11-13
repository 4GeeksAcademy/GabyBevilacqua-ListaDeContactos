import React, { Component } from "react";
import { Link } from "react-router-dom";

export const NameAgenda = () => {

    return (

        <form className="row g-3">
            <div className="col-auto">
                <label for="agendaName" className="form-label">Agenda:</label>
            </div>
            <div className="col-5">
                <input type="text" className="form-control" id="agendaName" placeholder="Escoge un nombre para tu agenda" />
            </div>
            <div className="col-auto">
                <Link to="/addContact">
                    <button type="submit" className="btn btn-primary mb-3">Save</button>
                </Link>
            </div>
            <div className="col-auto">
                <Link to="/contacts">
                    <button type="submit" className="btn btn-primary mb-3">Go to contacts</button>
                </Link>
            </div>
        </form>

    )
}