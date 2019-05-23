import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Fade } from 'react-reveal';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Background from '../components/Background';

const Container = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ContactForm = styled.div`
  height: 250px;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 300px;
  height: 45px;
  padding: 0 15px;
  outline: none;
  border-radius: 5px;
  border: 1px rgba(0, 0, 0, 0.1) solid;
`;

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  

  return (
    <Layout>
      <SEO title="Contact" />
      <Background />
      <Container>
        <ContactForm>
          <Fade delay={1000}>
            <Input type="text" placeholder="Name" />
          </Fade>
          <Fade delay={1200}>
            <Input type="text" placeholder="Email" />
          </Fade>
          <Fade delay={1400}>
            <Input type="text" placeholder="Message" />
          </Fade>
        </ContactForm>
      </Container>
    </Layout>
  );
}

export default Contact;
