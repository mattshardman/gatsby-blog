import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background: linear-gradient(180deg, #fff, #fcfdff);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: " ";
    background: linear-gradient(
      180deg,
      #fff 10%,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0) 70%,
      #fff 90%
    );
    height: 100vh;
    width: 100%;
    position: absolute;
  }
`;

const Circle = styled.div`
  position: absolute;
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  animation-name: expand;
  animation-iteration-count: 1;
  animation-duration: 2s;

  @keyframes expand {
    from {
      transform: scale(0);
    }

    to {
      transform: scale(1);
    }
  }
`;

function Background() {
  return (
    <Container>
      {[500, 800, 1100, 1400].map(each => (
        <Circle key={each} size={each} />
      ))}
    </Container>
  );
}

export default Background;
