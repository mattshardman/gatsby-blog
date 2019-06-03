import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Post = styled.div`
  scroll-snap-align: center;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  width: 320px;
  max-width: 50%;
  padding: 20px;
  border-radius: 5px;
  border: 1px #dadce0 solid;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 30px 0px;
  cursor: pointer;
  filter: ${({ active }) => (active ? 'none' : 'grayscale(100%)')};
  opacity: ${({ active }) => (active ? 1 : 0.7)};
  transform: ${({ active }) => (active ? 'scale(1)' : 'scale(0.9)')};
  transition: all 250ms;

  &:hover {
    transform: transformY(-3px);
    filter: none;
    opacity: 1;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 500px) {
    width: 250px;
  }
`;

const Heading = styled.h3`
  margin: 0;
  margin-bottom: 12px;
  color: #484848;
`;

const Paragraph = styled.p`
  color: #767676;
  font-weight: 400;
  text-align: justify;
  margin: 12px 0;
  line-height: 1.5;
  margin-bottom: 35px;
`;

const Date = styled.div`
  box-sizing: border-box;
  width: calc(100% - 40px);
  position: absolute;
  bottom: 15px;
  left: 20px;
  color: #000;
  display: flex;
  justify-content: space-between;
`;

function Card({
  index, title, text, buttons, active, clickHandler, src,
}) {
  return (
    <Post onClick={() => clickHandler(index)} active={active} index={index}>
      <img src={src} alt="" style={{ marginBottom: 10, border: '1px solid #eaeaea' }} />
      <Heading>
        <div
          style={{ boxShadow: 'none', color: '#2B2B2B' }}
        >
          {title}
        </div>
      </Heading>

      <Paragraph>
        {text}
      </Paragraph>
      <Date>
        { buttons.map(button => (
          <a
            key={button.text}
            href={button.link}
            target="_blank"
            rel="noopener noreferrer"
          >{button.text}
          </a>
        )) }
      </Date>
    </Post>
  );
}

Card.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  active: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

export default Card;
