import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const FooterContainer = styled.footer`
    box-sizing: border-box;
    width: 100%;
    height: 200px;
    background: #fff;
    display: flex;
    justify-content: center;
`;

const Content = styled.div`
    width: 1200px;
    max-width: 100%;
    padding: 0px 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <Content>
        <Logo text="Matt.cat" scrolled color="#000" />
        <small>&copy;2019 Matt.cat</small>
      </Content>
    </FooterContainer>
  );
}

export default Footer;
