import React, { Component } from "react";
import rigo from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

export const ContactCard = ({contact}) => {
  

  const eliminarContacto = () => {

    Swal.fire({
      title: "Are you sure?",
      text: "With this action you delete the contact for good",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "The contact has been deleted.",
          icon: "success"
        });
      }
    });

    actions.deleteContact(contact.id);
  };
  return (

    <div className="card mx-auto mb-1" style={{ width: "95%" }}>
      <div className="row g-0">
        <div className="col-md-2">
          <img src={rigo} className="img-fluid rounded-circle mx-2 mt-2" style={{ width: "150px", height: "150px", objectFit: "cover" }} alt="imagen del contacto" />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title text-start">{contact.name}</h5>
              <div>
                <Link to="/editContact">
                  <button className="me-4"
                    style={{ color: "black", border: "none", borderRadius: "3px", cursor: "pointer" }}>
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                </Link>
                <button className="me-2"
                  onClick={eliminarContacto}
                  style={{ color: "black", border: "none", borderRadius: "3px", cursor: "pointer" }}>
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
            </div>
            <p className="card-text text-start">{contact.address}</p>
            <p className="card-text text-start">{contact.phone}</p>
            <p className="card-text text-start">{contact.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

