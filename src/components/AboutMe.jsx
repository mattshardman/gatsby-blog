import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';

const Container = styled.section`
    position: relative;
    height: 725px;
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
`;

const Heading = styled.div`
    width: 100%;
    height: 125px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    h1 {
        margin: 0;
        margin-top: 15px;
    }
`;

const Body = styled.div`
    padding: 50px;
    width: 100%;

    p {
        margin: 0;
    }
`;

const Sheet = styled.div`
    position: absolute;
    top: -40px;
    height: 750px;
    width: 600px;
    max-width: 90%;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 -1px 2px rgba(0, 0, 0, 0.05);
`;

function AboutMe() {
  return (
    <Container>
      <Sheet>
        <Heading>
          <Avatar />
          <h1>About Me</h1>
        </Heading>
        <Body>
          <p>Hi</p>
        </Body>

      </Sheet>
    </Container>
  );
}

export default AboutMe;
