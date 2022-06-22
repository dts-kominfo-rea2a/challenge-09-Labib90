// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = (){ data }) => {
    return (
    <div className="card">
    <div className="top">
    <h3 className="name">{data.name}</h3>
    <img className="circle-img" src={data.photo} alt="Foto Kucing"></img>
    </div>

    <div className="bottom">
    <p className="info">{data.email}</p>
    <p className="info">{data.phone}</p>
    </div>
    </div>
    );
}

export default Contact;