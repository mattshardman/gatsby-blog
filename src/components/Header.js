import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Logo from "./Logo"
import Avatar from "./Avatar"

import Arrow from '@material-ui/icons/ArrowForwardIos';

const Container = styled.header`
  position: fixed;
  z-index: 100;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: ${({ scrolled }) =>
    scrolled ? "rgba(0, 0, 0, 0.06) 0px 6px 20px" : "none"};
`

const Nav = styled.nav`
  height: 60px;
  width: 1200px;
  max-width: 100%;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Cabin;

  @media (max-width: 600px) {
    height: 75px;
  }
`

const NavMob = styled.nav`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  line-height: 2.5;
`

const DesktopMenuItem = styled.a`
  color: #000;
  display: flex;
  align-items: center;
  transition: color 1s;
  text-decoration: none;
  box-shadow: none;
  font-size: 17px;

  &:hover {
    color: #f442e5;
  }
`

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
`

const MobileButton = styled.button`
  display: none;
  background: none;
  border: none;
  transform: rotate(90deg);
  transition: transform 300ms;
  -webkit-tap-highlight-color: transparent;

  @media (max-width: 600px) {
    display: flex;
    justify-content: flex-end;
  }
`

function Header({ isMobile, isTablet, avatarImage, menuItems }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (!window.scrollY) {
        return setScrolled(false)
      }
      return setScrolled(true)
    })
  }, [])

  return (
    <Container scrolled={scrolled}>
      <Nav>
        <Link to="" style={{ boxShadow: "none" }}>
          <DesktopMenuItem>
            <Logo isMobile={isMobile} text="Matt H" scrolled={scrolled} />
          </DesktopMenuItem>
        </Link>
        <MobileButton
          type="button"
          // style={{ display: "flex", justifyContent: "flex-end" }}
          onClick={() => setOpen(!open)}
          // className={open ? "arrowOpen" : "arrow"}
        >
          <Arrow />
        </MobileButton>
        <DesktopNavOptions>
          {menuItems.map(each => (
            <Link to={each.link} key={each.link} style={{ boxShadow: "none" }}>
              <DesktopMenuItem>
                {each.icon && each.icon}
                <small>{each.title}</small>
              </DesktopMenuItem>
            </Link>
          ))}
          {!isTablet && <Avatar avatarImage={avatarImage} />}
        </DesktopNavOptions>
      </Nav>
      {open && (
        <NavMob>
          {menuItems.map(each => (
            <a
              each={each.link}
              href={each.link}
              onClick={() => setOpen(false)}
              className="mobile-item"
              style={{ color: each.color || "#000" }}
            >
              <small style={{ fontSize: 14 }}>{each.title}</small>
              <div
                style={{
                  display: "flex",
                  width: 30,
                  justifyContent: "center",
                  fontSize: 24,
                }}
              >
                <i className={each.icon} />
              </div>
            </a>
          ))}
        </NavMob>
      )}
      <style jsx>
        {`
          .desktop-nav-options {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: ${isTablet ? "60%" : "40%"};
          }

          .arrow {
            background: none;
            border: none;
            transform: rotate(90deg);
            transition: transform 300ms;
            -webkit-tap-highlight-color: transparent;
          }

          .arrowOpen {
            background: none;
            border: none;
            transform: rotate(270deg);
            transition: transform 300ms;
            -webkit-tap-highlight-color: transparent;
          }

          .arrow:focus,
          .arrowOpen:focus {
            outline: none;
          }

          .arrow:active,
          .arrowOpen:active {
            background: none;
          }

          .mobile-item {
            width: 100%;
            height: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 5%;
            border-bottom: solid 1px #eaeaea;
            box-shadow: none;
          }
        `}
      </style>
    </Container>
  )
}

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
  avatarImage: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired, //eslint-disable-line
}

export default Header
