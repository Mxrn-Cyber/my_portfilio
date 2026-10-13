import React, { useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Contact.css";
import { useLanguage } from "../../context/LanguageContext";

// Web3Forms access keys are meant to be public (they only allow sending to the owner's inbox).
const WEB3FORMS_ACCESS_KEY = "d50a589a-5e35-4f21-ae59-5fc3635ebdd8";
const EMPTY = { user_name: "", user_email: "", message: "" };

const ContactForm = () => {
  const { t } = useLanguage();
  const heading = t("contact.heading");
  const form = useRef();
  const [formValues, setFormValues] = useState(EMPTY);
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

    if (!formValues.user_name || !formValues.user_email || !formValues.message) {
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
        setFormValues(EMPTY);
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
