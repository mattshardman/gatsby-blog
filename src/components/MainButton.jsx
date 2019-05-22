import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  border: none;
  width: 180px;
  
  height: 40px;
  margin: 0;
  font-weight: 350;
  opacity: 1;
  font-size: 14px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 -1px 2px rgba(0, 0, 0, 0.05);
  transition: all 500ms;
  opacity: 0;
  animation-fill-mode: forwards;
  animation-delay: 1s;
  animation: fade 1.5s forwards 1;

  &:hover {
    transform: translateY(-1px);
    background: ${({ background }) => background};
    box-shadow: 0 7px 12px rgba(0, 0, 0, 0.2);
  }

  &:active,
  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media (max-width: 600px) {
    margin: 10px 0;
    width: 100%;
  }

  @keyframes fade {
    from { opacity: 0 };
    to { opacity: 1 };
  }
`;

const Icon = styled.div`
  left: 20px;
  position: absolute;
  padding: 0;
  margin: 0;
  height: 18px;
  font-size: 18px;
`;

function MainButton(props) {
  const { icon, text } = props;
  return (
    <Button {...props}>
      {icon && (
        <Icon>
          {icon}
        </Icon>
      )}
      {text.toUpperCase()}
    </Button>
  );
}

MainButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
};

export default MainButton;
