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
    return 'scale(1.3)';
  }

  if (isActive !== null && isActive + 1 === elementNumber) {
    return 'scale(1.15)';
  }

  if (isActive !== null && isActive - 1 === elementNumber) {
    return 'scale(1.1)';
  }

  return 'scale(1)';
};

const ImgWrapper = styled.div`
    height: 20px;
    width: 30px;
    padding: 0 5px;
    margin: 0;
    cursor: pointer;
    transition: all 600ms;
    transform: ${transformFunction};
    transform-origin: center bottom;
`;

const Img = styled.img`
    height: 100%;
`;

function Dock() {
  const [isActive, setIsActive] = useState(null);

  return (
    <Container>
      <ImgWrapper
        isActive={isActive}
        elementNumber={0}
        onMouseEnter={() => setIsActive(0)}
        onMouseLeave={() => setIsActive(null)}
      >
        <Img

          src="https://seeklogo.com/images/C/chrome-logo-D5FECB59EF-seeklogo.com.png"
          alt=""
        />
      </ImgWrapper>
      <ImgWrapper
        isActive={isActive}
        elementNumber={1}
        onMouseEnter={() => setIsActive(1)}
        onMouseLeave={() => setIsActive(null)}
      >
        <Img

          src="https://seeklogo.com/images/W/whatsapp-logo-DDC3F9A34F-seeklogo.com.png"
          alt=""
        />
      </ImgWrapper>
      <ImgWrapper
        isActive={isActive}
        elementNumber={2}
        onMouseEnter={() => setIsActive(2)}
        onMouseLeave={() => setIsActive(null)}
      >
        <Img

          src="https://seeklogo.com/images/H/hyper-logo-C3FD37FA76-seeklogo.com.png"
          alt=""
        />
      </ImgWrapper>
    </Container>
  );
}

export default Dock;
