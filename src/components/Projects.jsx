import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    overflow: hidden;
`;

const Cards = styled.div`
    display: flex; 
    padding: 50px 5%;
    transform: ${({ active }) => `translateX(${-(active * 320 - 640)}px)`};
    transition: transform 420ms;
`;

const cards = [
  { title: 'One', src: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1556614940/blog/now.png' },
  { title: 'Two', src: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1552990006/portfolio/Screenshot_2019-03-19_at_10.06.23.png' },
  { title: 'Three', src: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1552897944/portfolio/Screenshot_2019-03-18_at_08.32.09.png' },
  { title: 'Four', src: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1552990038/portfolio/Screenshot_2019-03-19_at_10.06.54.png' },
  { title: 'Five', src: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1543249109/portfolio/raal-training.png' },
];

function Projects() {
  const [active, setActive] = useState(2);

  return (
    <Container>
      <h1>Projects</h1>
      <Cards active={active}>
        { cards.map((card, index) => (
          <Card
            title={card.title}
            src={card.src}
            active={active === index}
            setActive={setActive}
            index={index}
          />
        ))}
      </Cards>
    </Container>
  );
}

export default Projects;