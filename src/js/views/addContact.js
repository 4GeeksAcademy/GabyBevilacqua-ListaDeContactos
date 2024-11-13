import React, { useState, useEffect, useContext } from "react";
import { createHashRouter, Link } from "react-router-dom";
import { Context } from "../store/appContext";

//import "../../styles/demo.css";

export const AddContact = () => {
    const { store, actions } = useContext(Context);
    const [contacto, setNewContacto] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {
    
        setNewContacto(prev => {
            return { ...prev,[e.target.name]: e.target.value }
        })
    }

    const handleSubmit = (e) => {
        e.prevent.default()
        actions.createContact(contacto).then(console.log)
    }


    useEffect(() => {

      //  createUser() // esta funcion esta en flux con post

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
                <button className="btn btn-primary me-2">Save</button>
            </Link>
            <Link to="/">
                <span className="text">Get back to Crear Agenda</span>
            </Link>
        </div>
    );
};



/*<ul className="list-group">
{store.demo.map((item, index) => {
    return (
        <li
            key={index}
            className="list-group-item d-flex justify-content-between"
            style={{ background: item.background }}>
            <Link to={"/single/" + index}>
                <span>Link to: {item.title}</span>
            </Link>
            {// Conditional render example
                // Check to see if the background is orange, if so, display the message
                item.background === "orange" ? (
                    <p style={{ color: item.initial }}>
                        Check store/flux.js scroll to the actions to see the code
                    </p>
                ) : null}
            <button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
                Change Color
            </button>
        </li>
    );
})}
</ul>*/