import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import SpinningElements from './SpinningElements';

const Container = styled.section`
    position: relative;
    min-height: 725px;
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    z-index: 5;
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

const Sheet = styled.div`
    position: absolute;
    border: 1px #dadce0 solid;
    top: -40px;
    min-height: 750px;
    width: 600px;
    max-width: 90%;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 -1px 2px rgba(0, 0, 0, 0.05);
    z-index: 1; 
`;

const Body = styled.div`
    padding: 20px 50px;
    width: 100%;

    p {
        margin: 10px 0;
    }

    @media(max-width: 900px) {
      padding: 10px 20px;
      font-size: 14px;
    }
`;

const text = [`I\'m Matt. I am a full-stack Javascript developer 
from the UK. I started working at Yahoo working on a JavaScript application 
called Cake.`,
`The purpose of the application was only to send some form data to the developer via the server .
But in all my life i have NEVER encountered any such problem with any software that uses the "GET/POST" / "POST" / 'PUT" / "DELETE" functions in this manner.`,
'What this application is actually doing in this particular case is:  it\'s going to ask the developer to choose, where to send the response to in a cookie which it will cache for some time.',
'When that time comes for the developer to look for the response, then they\'ll simply get the response from the browser, no cookies will have been set.',
'It\'s actually pretty simple. All you have to do is pass a valid hash to this function .',
`If you try to make the response any more complicated you will find that your data will be rejected due to the way that POST and GET have been designed. It's called this:
"response": { "type": "GET", "method": "PUT", "headers": { "Authorization": "Bearer foo", "Content-Type": "application/p+json" }, "status": 200"`]; // eslint-display-line

function AboutMe() {
  return (
    <Container>
      <SpinningElements />
      <Sheet>
        <Heading>
          <Avatar />
          <h1>About Me</h1>
        </Heading>
        <Body>
          {text.map(each => <p>{each}</p>)}
        </Body>
      </Sheet>
    </Container>
  );
}

export default AboutMe;
