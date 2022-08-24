import React from 'react';
import logo from '../Photos/logo.jpg'

const Contact = () => {
    return (
        <>
            <fieldset className="contacto">
                <legend>Contact me!</legend>
                <form className="contacta">
                    <label>Name: </label>    <input placeholder="name" type="text" /> <br />
                    <label>Email: </label>   <input placeholder="email" type="email" /> <br />
                    <label>Message: </label> <input placeholder="message" type="text" /> <br />
                </form>
                <button className="#formbtn">Submit</button>
            </fieldset>
            <img className="Contactlogobrand" src={logo} alt="brand" />

        </>
    );
};

export default Contact;