import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Post = styled.div`
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  scroll-snap-align: center;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  width: 320px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: 50%;
  padding: 20px;
  border-radius: 5px;
  border: 1px #dadce0 solid;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 15px 0px;
  background: #fff;
  cursor: pointer;
  filter: ${({ active }) => (active ? 'none' : 'grayscale(100%)')};
  opacity: ${({ active }) => (active ? 1 : 0.7)};
  transform: ${({ active }) => (active ? 'scale(1)' : 'scale(0.9)')};
  transition: all 250ms;

  &:hover {
    transform: ${({ active }) => (active ? 'translateY(-3px) scale(1)' : 'translateY(-3px) scale(0.9)')};
    filter: none;
    opacity: 1;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 500px) {
    width: 250px;
    height: 320px;
    font-size: 14px;
  }
`;

const ImageWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 10px;
  right: 10px;
  top: 10px;
  border: 1px solid #dadce0;
  border-radius: 5px;
  overflow: hidden;
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
  margin: 5px 0;
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
  index, title, text, buttons, active, clickHandler, img,
}) {
  return (
    <Post onClick={() => clickHandler(index)} active={active} index={index}>
      <ImageWrapper>
        <Img fluid={img} />
      </ImageWrapper>
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
  img: PropTypes.string.isRequired,
};

export default Card;
