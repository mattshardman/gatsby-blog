import React from 'react';
import styled from 'styled-components';

const Post = styled.div`
  position: relative;
  width: 320px;
  max-width: 75%;
  padding: 20px;
  border-radius: 5px;
  border: 1px #dadce0 solid;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 30px 0px;
  cursor: pointer;
  filter: ${({ active }) => (active ? 'none' : 'grayscale(100%)')};
  opacity: ${({ active }) => (active ? 1 : 0.7)};
  transform: ${({ active }) => (active ? 'scale(1)' : 'scale(0.9)')};
  transition: all 420ms;

  &:hover {
    transform: transformY(-3px);
    filter: none;
    opacity: 1;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
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
`;

function Card({
  link, image, title, active, setActive, index, src,
}) {
  return (
    <Post onClick={() => setActive(index)} active={active}>
      <img src={src} alt="" style={{ marginBottom: 10, border: '1px solid #eaeaea' }} />
      <Heading>
        <div
          style={{ boxShadow: 'none', color: '#2B2B2B' }}
        >
          {title}
        </div>
      </Heading>

      <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ut voluptatum repudiandae quo vel voluptatem vitae.
      </Paragraph>
      <Date>
        <small style={{ margin: 0 }} />
      </Date>
    </Post>
  );
}

export default Card;
