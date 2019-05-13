import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    height: 25px;
    bottom: 0;
    padding: 0 5px;
    background: rgba(0,0,0,0.2);
    border-top: 1px solid rgba(0,0,0,0.3);
    border-left: 1px solid rgba(0,0,0,0.3);
    border-right: 1px solid rgba(0,0,0,0.3);
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const transformFunction = ({ isActive, elementNumber }) => {
  if (isActive === elementNumber) {
    return 'scale(1.2) translateY(-3px)';
  }

  if (isActive !== null && isActive + 1 === elementNumber) {
    return 'scale(1.1) translateY(-2px)';
  }

  if (isActive !== null && isActive - 1 === elementNumber) {
    return 'scale(1.1) translateY(-2px)';
  }

  return 'scale(1)';
};

const Img = styled.img`
    height: 65%;
    padding: 0 5px;
    margin: 0;
    cursor: pointer;
    transition: all 1s;
    transform: ${transformFunction};
`;

function Dock() {
  const [isActive, setIsActive] = useState(null);

  return (
    <Container>
      <Img
        isActive={isActive}
        elementNumber={0}
        onMouseEnter={() => setIsActive(0)}
        onMouseLeave={() => setIsActive(null)}
        src="https://seeklogo.com/images/C/chrome-logo-D5FECB59EF-seeklogo.com.png"
        alt=""
      />
      <Img
        isActive={isActive}
        elementNumber={1}
        onMouseEnter={() => setIsActive(1)}
        onMouseLeave={() => setIsActive(null)}
        src="https://seeklogo.com/images/W/whatsapp-logo-DDC3F9A34F-seeklogo.com.png"
        alt=""
      />
      <Img
        isActive={isActive}
        elementNumber={2}
        onMouseEnter={() => setIsActive(2)}
        onMouseLeave={() => setIsActive(null)}
        src="https://seeklogo.com/images/H/hyper-logo-C3FD37FA76-seeklogo.com.png"
        alt=""
      />

    </Container>
  );
}

export default Dock;
