import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Fade } from 'react-reveal';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Background from '../components/Background';
import MainButton from '../components/MainButton';

const Container = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ContactForm = styled.form`
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

  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);


  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/send', {
        name, email, message,
      });
      setSent(true);
    } catch (err) {
      setSent(true);
      setError(err);
    }
  };

  return (
    <Layout>
      <SEO title="Contact" />
      <Background />
      {
        sent
          ? (
            <Container>
              <div style={{ textAlign: 'center' }}>
                <h3>Thank you for getting in touch.<br /> I&apos;ll get back to you soon</h3>
                { !!error && <p>Sorry your message didn&apos;t send</p> }
              </div>
            </Container>
          )
          : (
            <Container>
              <ContactForm onSubmit={submitHandler}>
                <Fade delay={1000}>
                  <Input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                </Fade>
                <Fade delay={1200}>
                  <Input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                </Fade>
                <Fade delay={1400}>
                  <Input type="text" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
                </Fade>
                <Fade delay={1600}>
                  <MainButton type="submit" text="send" background="#24292e" color="#fff" width="300px" />
                </Fade>
              </ContactForm>
            </Container>
          )
      }

    </Layout>
  );
}

export default Contact;
