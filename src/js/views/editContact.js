import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {

    /*
const { store, actions } = useContext();
    const { id } = useParams();
    const navigate = useNavigate();
    const [contact, setContact] = useState(null);

    useEffect(() => {
        const foundContact = store.contacts.find((c) => c.id === parseInt(id));
        if (foundContact) setContact(foundContact);
    }, [id, store.contacts]);

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.updateContact(contact, id);
        navigate("/contacts");
    };
*/

    return (
        <div className="container">
            <h1 className="text-center pt-2">Update Contact</h1>
            <div className="mb-3 pt-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input 
                value= "contacto.name"
                onChange="handleChange"
                name="name"
                type="text" className="form-control" id="fullName" placeholder="Enter Full Namer" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                 value= "contacto.email"
                 onChange="handleChange"
                 name="email"
                type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                 value= "contacto.phone"
                 onChange="handleChange"
                 name="phone" 
                type="tel" className="form-control" id="phone" placeholder="Enter phone" />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                 value= "contacto.address"
                 onChange="handleChange"
                 name="address" 
                type="text" className="form-control" id="address" placeholder="Enter address" />
            </div>
            <br />
            <Link to="/contacts">
                <button className="btn btn-primary me-2">Save changes</button>
            </Link>
            <Link to="/contacts">
                <span className="text">Back to contacts</span>
            </Link>
        </div>
    );
};