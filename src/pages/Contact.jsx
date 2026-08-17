import React from 'react'
import { Container } from "react-bootstrap";
import Particle from '../components/Particle';
import ContactForm from '../components/Contact/Contact';
import Social from '../components/Contact/Social';
import '../components/Contact/Contact.css';

const Contact = () => {
  return (
    <Container fluid className="contact-page mx-auto">
      <Particle />
      <ContactForm />
      <Social />
    </Container>
  )
}

export default Contact