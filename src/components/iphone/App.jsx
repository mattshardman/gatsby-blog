import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 100%;
    background: #fff;
    border-radius: 14px;
    animation: move 300ms 1 forwards;
    animation-delay: 1s;
    transform: translateY(100%);

    @keyframes move {
        from {
            transform: translateY(100%);
        }

        to {
            transform: translateY(0%);
        }
    }
`;

function IPhoneApp() {
  return (
    <Container>
        
        </Container>
  );
}

export default IPhoneApp;
