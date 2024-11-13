import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {

    return (
        <div className="container">
            <h1 className="text-center pt-2">Update Contact</h1>
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
            <Link to="/contacts">
                <button className="btn btn-primary me-2">Save changes</button>
            </Link>
            <Link to="/contacts">
                <span className="text">Get back to contacts</span>
            </Link>
        </div>

    );
};