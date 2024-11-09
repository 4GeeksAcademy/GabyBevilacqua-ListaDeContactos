import React, { Component } from "react";
import fotogaby from "../../img/fotogaby.jpg";

export const ContactCard = (image, fullName, email, phone, address, editContact, deleteContact) => {
  return (
    <>

      <div className="card mx-auto mb-1" style={{ width: "95%" }}>
        <div className="row g-0">
          <div className="col-md-2">
            <img src={fotogaby} className="img-fluid rounded-circle mx-2 mt-2" style={{ width: "150px", height: "150px", objectFit: "cover" }} alt="imagen del contacto" />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title text-start">Full Name</h5>
                <div>
                  <button className="me-4"
                    onClick={() => editContact(contact)}
                    style={{ color: "black", border: "none", borderRadius: "3px", cursor: "pointer" }}>
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                  <button className="me-2"
                    onClick={() => deleteContact(contact)}
                    style={{ color: "black", border: "none", borderRadius: "3px", cursor: "pointer" }}>
                    <i className="far fa-trash-alt"></i>
                  </button>
                </div>
              </div>
              <p className="card-text text-start">Address</p>
              <p className="card-text text-start">Phone</p>
              <p className="card-text text-start">Email</p>
            </div>
          </div>
        </div>
      </div>
    </>

  )

}

