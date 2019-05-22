import React from 'react';
import styled from 'styled-components';
import Arrow from '@material-ui/icons/ArrowBackIos';

import MessageBubble from './MessageBubble';
import Avatar from '../Avatar';

const Container = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    padding-top: 15px;
    background: #fff;
    border-radius: 14px;
    animation: move 300ms 1 forwards;
    animation-delay: 1s;
    transform: translateY(100%);
    font-size: 12px;

    @keyframes move {
        from {
            transform: translateY(100%);
        }

        to {
            transform: translateY(0%);
        }
    }
`;

const Heading = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
    border-bottom: 1px solid #eaeaea;
`;

const BackArrow = styled.div`
    position: absolute;
    left: 10px;
    font-size: 15px;
`;

const Text = styled.div`
    width: 100%;
    position: absolute;
    bottom: 20px;
`;

function IPhoneApp() {
  return (
    <Container>
      <Heading>
        <Avatar />
        <small style={{ padding: 5, color: '#ff0078' }}>Matt</small>
        <BackArrow><Arrow style={{ fontSize: 12 }} /></BackArrow>
      </Heading>
      <Text>
        <MessageBubble>
          Hi I&apos;m Matt.
        </MessageBubble>
        <MessageBubble>
          I am a full-stack javascript developer from the UK.
        </MessageBubble>
      </Text>
    </Container>
  );
}

export default IPhoneApp;
