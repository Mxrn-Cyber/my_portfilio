// import React, { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { Container, Row, Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import "./Contact.css";

// const Contact = () => {
//   const form = useRef();
//   const [done, setDone] = useState(false);
//   const [notDone, setNotDone] = useState(false);
//   const [formData, setFormData] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setDone(false);
//     setNotDone(false);
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     if (!formData.from_name || !formData.reply_to || !formData.message) {
//       setNotDone(true);
//     } else {
//       emailjs
//         .sendForm(
//           "service_puecuoq",
//           "template_xv6a10s",
//           form.current,
//           "z9THTEeu_pzWpMAt--"
//         )
//         .then(
//           (result) => {
//             console.log(result.text);
//             setDone(true);
//             setFormData({});
//             form.current.reset();
//           },
//           (error) => {
//             console.log(error.text);
//             setNotDone(true);
//           }
//         );
//     }
//   };
//   return (
//     <Container style={{ paddingTop: "50px" }}>
//       <Row>
//         <Col md={6} className="c-left">
//           <h1>Get in Touch</h1>
//           <h1 className="yellow">Contact me</h1>
//         </Col>
//         <Col md={6} className="c-right">
//           <form ref={form} onSubmit={sendEmail}>
//             <input
//               type="text"
//               name="from_name"
//               className="user"
//               placeholder="Name"
//               onChange={handleChange}
//             />
//             <input
//               type="email"
//               name="reply_to"
//               className="user"
//               placeholder="Email"
//               onChange={handleChange}
//             />
//             <textarea
//               name="message"
//               className="user"
//               placeholder="Message"
//               onChange={handleChange}
//             />
//             <span className="not-done">
//               {notDone && "Please, fill all the input field"}
//             </span>
//             <Button type="submit" className="button" disabled={done}>
//               Send
//             </Button>
//             <span className="done">
//               {done &&
//                 "Thanks for contacting me and be sure i have recieved your mail."}
//             </span>
//           </form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Contact;
import React, { useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import "./Contact.css";

const ContactForm = () => {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });
  const [notDone, setNotDone] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formValues.from_name || !formValues.reply_to || !formValues.message) {
      setNotDone(true);
      return;
    }

    emailjs
      .sendForm(
        "service_puecuoq", // Replace with your EmailJS service ID
        "template_xv6a10s", // Replace with your EmailJS template ID
        form.current,
        "AvQazoWMMMhL2Tr5ar2Pq" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setDone(true);
          setFormValues({ from_name: "", reply_to: "", message: "" }); // Reset form fields
          form.current.reset();
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  return (
    <Container className="contact-container">
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact me</h1>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="user"
              placeholder="Name"
              onChange={handleChange}
              value={formValues.from_name}
            />
            <input
              type="email"
              name="reply_to"
              className="user"
              placeholder="Email"
              onChange={handleChange}
              value={formValues.reply_to}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              onChange={handleChange}
              value={formValues.message}
            />
            <span className="not-done">
              {notDone && "Please, fill all the input fields"}
            </span>
            <Button type="submit" className="button" disabled={done}>
              Send
            </Button>
            <span className="done">
              {done &&
                "Thanks for contacting me! I have received your message."}
            </span>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
