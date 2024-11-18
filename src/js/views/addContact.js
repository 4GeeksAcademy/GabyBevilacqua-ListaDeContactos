import React, { useState, useEffect, useContext } from "react";
import { createHashRouter, Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const [contacto, setContacto] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {

        setContacto(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = () => {

        actions.createContact(store.agenda.slug, contacto).then(console.log)
    }

    useEffect(() => {
        if (!store.agenda.slug) {
            navigate("/");
        }
    }, [])

    return (
        <div className="container">
            <h1 className="text-center pt-2">New Contact</h1>
            <div className="mb-3 pt-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                    value={contacto.name}
                    onChange={handleChange}
                    name="name"
                    type="text" className="form-control" id="fullName" placeholder="Enter Full Namer" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    value={contacto.email}
                    onChange={handleChange}
                    name="email"
                    type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                    value={contacto.phone}
                    onChange={handleChange}
                    name="phone"
                    type="tel" className="form-control" id="phone" placeholder="Enter phone" />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                    value={contacto.address}
                    onChange={handleChange}
                    name="address"
                    type="text" className="form-control" id="address" placeholder="Enter address" />
            </div>
            <br />
            <Link to="/contacts">
                <button
                    onClick={handleSubmit}
                    style={{ backgroundColor: "rgb(76, 63, 104)" }}
                    className="btn btn-secondary me-2">
                    Save
                </button>
            </Link>
            <Link to="/contacts">
                <span className="text">
                    Back to contacts
                </span>
            </Link>
        </div>
    );
};

/*
https://guia-star-wars.vercel.app/

https://starwars-visualguide.com/#/characters?page=1
https://starwars-visualguide.com/#/
*/