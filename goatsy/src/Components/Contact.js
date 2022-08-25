import React from 'react';
import logo from '../Photos/logo.jpg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com'
import  { useRef } from 'react';


const Contact = () => {

    const form = useRef();

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_7nta2ns', 'template_09c6b4d', e.target, '5Yu9yk8mxoA0OVXf1')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      console.log(sendEmail)
      console.log(emailjs)
      e.target.reset()
  
  
  
    }
    return (
        <>
           <body>

                <legend>Contact me!</legend>
           
            <Form ref={form} onSubmit={sendEmail} >
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter name" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" placeholder=" Send message" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit" className="formbtn">
                    Submit
                </Button>
            </Form>
            <img className="Contactlogobrand" src={logo} alt="brand" />
            </body>
        </>
    );
};

export default Contact;