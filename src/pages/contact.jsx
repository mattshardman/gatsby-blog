import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Fade, Rotate } from 'react-reveal';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Background from '../components/Background';
import MainButton from '../components/MainButton';
import ContactSuccessImg from '../components/ContactSuccessImg';

const Container = styled.section`
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ContactForm = styled.form`
  box-sizing: border-box;
  padding-top: 40px;
  height: 300px;
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

const AvatarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const SuccessAvatar = styled.div`
  box-sizing: border-box;
  width: 75px;
  height: 75px;
  padding-top: 4px;
  border-radius: 50%;
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 25px rgba(0,0,0,0.2);
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

                <AvatarContainer>
                  <Rotate>
                    <SuccessAvatar>
                      <ContactSuccessImg />
                    </SuccessAvatar>
                  </Rotate>
                </AvatarContainer>
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
                  <MainButton type="submit" text="send" background="#24292e" color="#fff" width="300px" mobWidth="300px" />
                </Fade>
              </ContactForm>
              <Fade delay={1800}>
                <p>- or -</p>
                <p>Email me: matt@matt.cat</p>
              </Fade>
            </Container>
          )
      }

    </Layout>
  );
}

export default Contact;
