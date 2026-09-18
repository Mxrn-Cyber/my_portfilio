import React from 'react'
import { Container } from "react-bootstrap";
import Particle from '../components/Particle';
import ContactForm from '../components/Contact/Contact';
import Social from '../components/Contact/Social';
import '../components/Contact/Contact.css';
import Seo from "../seo/Seo";

const Contact = () => {
  return (
    <Container fluid className="contact-page mx-auto">
      <Seo route="contact" />
      <Particle />
      <ContactForm />
      <Social />
    </Container>
  )
}

export default Contact