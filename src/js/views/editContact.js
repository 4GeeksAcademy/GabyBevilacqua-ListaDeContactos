import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {

    const { store, actions } = useContext(Context);     
    const { id } = useParams();                         
    const navigate = useNavigate();                      
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });                    

    useEffect(() => {
        const existingContact = store.contact.find((c) => c.id === parseInt(id));
        if (existingContact) {
            setContact(existingContact);       
        } else {
            console.error("Contacto no encontrado");
        }
    }, [id, store.contact]);

    // Manejar cambios en los campos del formulario
    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,        
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();                      
        try {
            await actions.updateContact(store.agenda.slug, contact, id);    
            navigate("/contacts");                                          
        } catch (error) {
            console.error("Error al guardar los cambios:", error);
        }
    };
    return (
        <div className="container">
            <h1 className="text-center pt-2">Update Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 pt-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                        value={contact.name}
                        onChange={handleChange}
                        name="name"
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Enter Full Namer"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        value={contact.email}
                        onChange={handleChange}
                        name="email"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        value={contact.phone}
                        onChange={handleChange}
                        name="phone"
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                        value={contact.address}
                        onChange={handleChange}
                        name="address"
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Enter address"
                    />
                </div>
                <br />
                <button
                    className="btn btn-primary me-2"
                    style={{ backgroundColor: "rgb(76, 63, 104)" }}>
                    Save changes
                </button>
                <Link to="/contacts">
                    <span className="text">Back to contacts</span>
                </Link>
            </form>
        </div>
    );
};
