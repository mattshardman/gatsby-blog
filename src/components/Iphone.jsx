import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 400px;
      width: 200px;
      background: black;
      border-radius: 25px;
      border: 1px #7D7D7 solid;
      box-shadow: 0 0 0 2px #323233, 0 30px 60px rgba(0,0,0,0.19), inset 0 -3px 2px rgb(150,150,150), inset 0 2px 1px rgb(150,150,150);
      display: flex;
      justify-content: center;
      align-items: center;

      @media (min-width: 600px) {
          display: none;
      }
`

function IPhone({ backgroundImage, children }) {
  return (
    <Container>

      <div style={{
        height: 380,
        width: 180,
        borderRadius: 14,
        overflow: 'hidden',
        background: 'linear-gradient(100deg, red, purple)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
      >
        <div style={{
          width: '100%',
          height: '3.5%',
          display: 'flex',
          justifyContent: 'center',
        }}
        >
          <div style={{
            width: '55%',
            height: '100%',
            background: 'black',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            display: 'flex',
            justifyContent: 'center',

          }}
          >
            <div style={{
              width: '30%', height: '25%', background: 'rgb(30,30,30)', borderRadius: 5, marginTop: 1,
            }}
            />
            <div style={{
              position: 'absolute',
              marginTop: 1,
              height: 4,
              width: 4,
              background: 'linear-gradient(175deg, #024993, black)',
              marginLeft: 20,
              borderRadius: '50%',
            }}
            />

          </div>

        </div>
        {children}
      </div>
      <div />
    </Container>
  );
}

export default IPhone;
