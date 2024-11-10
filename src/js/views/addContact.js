import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

//import "../../styles/demo.css";

export const AddContact = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <h1 className="text-center pt-2">New Contact</h1>
            <div className="mb-3 pt-3">
                <label for="fullName" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullName" placeholder="Enter Full Namer" />
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>
            <div className="mb-3">
                <label for="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" placeholder="Enter phone" />
            </div>
            <div className="mb-3">
                <label for="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="Enter address" />
            </div>
            <br />
            <Link to="/">
                <button className="btn btn-primary me-2">Save</button>
            </Link>
            <Link to="/">
                <span className="text">or get back to contacts</span>
            </Link>
        </div>
    );
};