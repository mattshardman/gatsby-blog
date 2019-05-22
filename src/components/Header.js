import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Arrow from '@material-ui/icons/ArrowForwardIos';
import Logo from './Logo';
import Avatar from './Avatar';


const Container = styled.header`
  position: fixed;
  z-index: 100;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: ${({ scrolled }) => (scrolled ? 'rgba(0, 0, 0, 0.06) 0px 6px 20px' : 'none')};
`;

const Nav = styled.nav`
  height: ${({ scrolled }) => (scrolled ? '60px' : '90px')};
  width: 1200px;
  max-width: 100%;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: height 420ms;

  @media (max-width: 600px) {
    height: 75px;
  }
`;

const NavMob = styled.nav`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  line-height: 2.5;
`;

const DesktopMenuItem = styled.a`
  color: #000;
  display: flex;
  align-items: center;
  transition: color 600ms;
  text-decoration: none;
  box-shadow: none;
  font-size: 17px;

  &:hover {
    color: #ff0078;
  }
`;

const DesktopNavOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  transition: width 500ms;

  @media (max-width: 600px) {
    display: none;
  }

  @media (max-width: 900px) {
    width: 60%;
  }
`;

const MobileButton = styled.button`
  display: none;
  background: none;
  border: none;
  transform: ${({ open }) => (open ? 'rotate(270deg)' : 'rotate(90deg)')};
  transition: transform 300ms;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  @media (max-width: 600px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const MobileItem = styled.a`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  border-bottom: solid 1px #eaeaea;
  box-shadow: none;
  color: #000;
`;

const MobileTitle = styled.small`
  font-size: 14px;
`;

const MobileIcon = styled.div`
  display: flex;
  width: 30px;
  justify-content: center;
  font-size: 24px;
`;

function Header({
  isMobile, isTablet, avatarImage, menuItems,
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (!window.scrollY) {
        return setScrolled(false);
      }
      return setScrolled(true);
    });
  }, []);

  return (
    <Container scrolled={scrolled}>
      <Nav scrolled={scrolled}>
        <Link to="" style={{ boxShadow: 'none' }}>
          <DesktopMenuItem>
            <Logo isMobile={isMobile} text="Matt.cat" scrolled={scrolled} />
          </DesktopMenuItem>
        </Link>
        <MobileButton type="button" open={open} onClick={() => setOpen(!open)}>
          <Arrow />
        </MobileButton>
        <DesktopNavOptions>
          {menuItems.map(each => (
            <Link to={each.link} key={each.link} style={{ boxShadow: 'none' }}>
              <DesktopMenuItem>
                {each.icon && each.icon}
                <small>{each.title}</small>
              </DesktopMenuItem>
            </Link>
          ))}
          {!isTablet && <Avatar />}
        </DesktopNavOptions>
      </Nav>
      {open && (
        <NavMob>
          {menuItems.map(each => (
            <MobileItem
              each={each.link}
              href={each.link}
              onClick={() => setOpen(false)}
            >
              <MobileTitle>{each.title}</MobileTitle>
              <MobileIcon>
                {each.icon}
              </MobileIcon>
            </MobileItem>
          ))}
        </NavMob>
      )}
    </Container>
  );
}

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
  avatarImage: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired, //eslint-disable-line
};

export default Header;
