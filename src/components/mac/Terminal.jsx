import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 75%;
    width: 75%;
    background: #000;
    border-radius: 5px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
`;

const TopBar = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    padding-left: 5px;
`;

const Button = styled.div`
    height: 5px;
    width: 5px;
    border-radius: 50%;
    margin-left: 5px;
    background: ${({ color }) => color};
`;

const Body = styled.pre`
    height: 90%;
    width: 100%;
    padding: 5%;
    color: #fff;
    font-size: 12px;
    outline: none;
`;

const textData = 'I\'m Matt.\n$ I am a full-stack Javascript developer \n from the UK.';

function Terminal() {
  const [text, setText] = useState('');
  const [addedText, setAddedText] = useState('');

  useEffect(() => {
    let count = 0;
    const textRender = setInterval(() => {
      if (textData[count]) {
        setText(prev => prev + textData[count]);
        count += 1;
      } else {
        clearInterval(textRender);
      }
    }, 0);
  }, []);

  useEffect(() => {
    const body = document.getElementById('body');
    body.addEventListener('input', ({ data }) => {
      setAddedText((prev) => {
        if (!data) {
          return prev;
        }
        return prev + data;
      });
    });
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', ({ keyCode }) => {
      if (keyCode === '13') {
        setText(prev => `${prev}$`);
      }
    });
  }, []);

  console.log(addedText);
  return (
    <Container>
      <TopBar>
        { ['red', 'orange', 'green'].map(btn => <Button color={btn} />)}
      </TopBar>
      <Body contentEditable id="body">
        $ {text}
      </Body>
    </Container>
  );
}

export default Terminal;
