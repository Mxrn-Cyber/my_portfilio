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
import "./Contact.css";
import { useLanguage } from "../../context/LanguageContext";

const WEB3FORMS_ACCESS_KEY = "d50a589a-5e35-4f21-ae59-5fc3635ebdd8";

const ContactForm = () => {
  const { t } = useLanguage();
  const heading = t("contact.heading");
  const form = useRef();
  const [formValues, setFormValues] = useState({
    user_name: "", // Matches the form field name="user_name"
    user_email: "", // Matches the form field name="user_email"
    message: "", // Matches the form field name="message"
  });
  const [notDone, setNotDone] = useState(false);
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setNotDone(false);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (
      !formValues.user_name ||
      !formValues.user_email ||
      !formValues.message
    ) {
      setNotDone(true);
      return;
    }

    setSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formValues.user_name,
          email: formValues.user_email,
          message: formValues.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setDone(true);
        setFormValues({ user_name: "", user_email: "", message: "" });
        form.current.reset();
      } else {
        console.error("Web3Forms error:", result.message);
        setNotDone(true);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setNotDone(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <Container className="contact-container">
      <Row className="justify-content-center">
        <Col md={12} className="c-left">
          <h1 className="project-heading">
            {heading.a} <strong className="yellow">{heading.highlight}</strong>
          </h1>
          <p className="section-lead">{t("contact.lead")}</p>
        </Col>
        <Col md={12} lg={8} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder={t("contact.namePlaceholder")}
              onChange={handleChange}
              value={formValues.user_name}
            />
            <input
              type="email"
              name="user_email"
              className="user"
              placeholder={t("contact.emailPlaceholder")}
              onChange={handleChange}
              value={formValues.user_email}
            />
            <textarea
              name="message"
              className="user"
              placeholder={t("contact.messagePlaceholder")}
              onChange={handleChange}
              value={formValues.message}
            />
            <span className="not-done">{notDone && t("contact.notDone")}</span>
            <Button type="submit" className="button" disabled={done || sending}>
              {t("contact.sendButton")}
            </Button>
            <span className="done">{done && t("contact.done")}</span>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
