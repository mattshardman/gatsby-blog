import React, { useState, useEffect } from 'react';
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

const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 500px) {
    overflow: scroll;
    scroll-snap-type: x mandatory;
    justify-content: flex-start;
  }
`;

const Cards = styled.div`
    display: flex; 
    padding: 50px 5%;
    transform: ${({ active }) => `translateX(${-(active * 320 - 960)}px)`};
    transition: transform 420ms;

    @media (max-width: 500px) {
      transition: transform 220ms;
      transform: none;
      padding-left: calc(50% - 125px);
      padding-right: calc(50% - 125px);
    }
    
`;

const cards = [
  { title: 'One', src: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1556614940/blog/now.png' },
  { title: 'Two', src: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1552990006/portfolio/Screenshot_2019-03-19_at_10.06.23.png' },
  { title: 'Three', src: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1552897944/portfolio/Screenshot_2019-03-18_at_08.32.09.png' },
  { title: 'Four', src: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1552990038/portfolio/Screenshot_2019-03-19_at_10.06.54.png' },
  { title: 'Five', src: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1543249109/portfolio/raal-training.png' },
  { title: 'Six', src: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1543249109/portfolio/raal-training.png' },
  { title: 'Seven', src: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1543249109/portfolio/raal-training.png' },
];

function Projects() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.innerWidth > 500) {
      setActive(3);
    }
    const cardsWrapper = document.getElementById('cards-wrapper');
    cardsWrapper.addEventListener('scroll', () => {
      const activeEl = Math.floor(cardsWrapper.scrollLeft / 250);
      setActive(activeEl);
    });
  }, []);

  const clickHandler = (index) => {
    setActive(index);
    if (window.innerWidth < 500) {
      const cardsWrapper = document.getElementById('cards-wrapper');
      cardsWrapper.scrollTo({
        left: index * 250,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Container>
      <h1>Projects</h1>
      <CardsWrapper id="cards-wrapper">
        <Cards active={active}>
          { cards.map((card, index) => (
            <Card
              title={card.title}
              src={card.src}
              active={active === index}
              clickHandler={clickHandler}
              index={index}
            />
          ))}
        </Cards>
      </CardsWrapper>
    </Container>
  );
}

export default Projects;
