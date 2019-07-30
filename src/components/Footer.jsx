import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const FooterContainer = styled.footer`
    box-sizing: border-box;
    width: 100%;
    height: 250px;
    background: #fff;
    display: flex;
    justify-content: center;
`;

const Content = styled.div`
    width: 1200px;
    max-width: 100%;
    padding: 40px 5%;
`;

function Footer() {
  return (
    <FooterContainer>
      <Content>
        <Logo text="Matt.cat" scrolled color="#000" />
      </Content>
    </FooterContainer>
  );
}

export default Footer;
