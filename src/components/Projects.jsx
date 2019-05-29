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

  @media (max-width: 600px) {
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
  {
    title: 'NOW BOOM',
    src: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1556614940/blog/now.png',
    text: 'A command line tool for spinning up an express server in order to test serverless functions locally.',
    buttons: [
      {
        text: '',
        link: '',
      },
      {
        text: 'GITHUB',
        link: 'https://github.com/mattshardman/now-boom',
      },
    ],
  },
  {
    title: 'DOWNSWOOD ALPACAS',
    src: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1552990006/portfolio/Screenshot_2019-03-19_at_10.06.23.png',
    text: 'A website for a rural Alpaca walking company. Built with Gatsby.js.',
    buttons: [
      {
        text: 'VISIT',
        link: '',
      },
    ],
  },
  {
    title: 'WACK JACK',
    src: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1552897944/portfolio/Screenshot_2019-03-18_at_08.32.09.png',
    text: 'Wack jack is a black jack progressive web-app built using next.js',
    buttons: [
      {
        text: 'VISIT',
        link: 'https://blackjack.now.sh',
      },

    ],
  },
  {
    title: 'N.A.S.',
    src: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1552990038/portfolio/Screenshot_2019-03-19_at_10.06.54.png',
    text: 'Website for Niche Aviation Solutions, an aviation consultancy agency specialising in flights into Antarctica.',
    buttons: [
      {
        text: 'VISIT',
        link: 'https://www.nascorporation.biz',
      },
    ],
  },
  {
    title: 'RAAL TRAINING PLATFORM',
    src: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1543249109/portfolio/raal-training.png',
    text: 'A training platform for ground handling staff in a Chilean airport.',
    buttons: [
      {
        text: 'VISIT',
        link: '',
      },
    ],
  },
  {
    title: 'PROSPERIFY',
    src: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1559058312/portfolio/Screenshot_2019-05-28_at_16.44.50.png',
    text: 'Website for a startup providing financial advice for millenials.',
    buttons: [
      {
        text: 'VISIT',
        link: 'https://wwww.prosperify.co.uk',
      },
    ],
  },
  {
    title: 'Seven',
    src: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1543249109/portfolio/raal-training.png',
    text: '',
    buttons: [
      {
        text: 'VISIT',
        link: '',
      },
    ],
  },
];

function Projects() {
  const [active, setActive] = useState(0);

  const scrollListener = (e) => {
    const activeEl = Math.floor((e.target.scrollLeft + 125) / 250);
    setActive(activeEl);
  };

  const clickHandler = (index) => {
    setActive(index);

    const isMobile = window.innerWidth < 500;

    if (isMobile) {
      const cardsWrapper = document.getElementById('cards-wrapper');
      cardsWrapper.scrollTo({
        left: index * 250,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const isDesktop = window.innerWidth > 500;
    if (isDesktop) setActive(3);

    const cardsWrapper = document.getElementById('cards-wrapper');
    cardsWrapper.addEventListener('scroll', scrollListener);
  }, []);

  return (
    <Container>
      <h1>Projects</h1>
      <CardsWrapper id="cards-wrapper">
        <Cards active={active}>
          { cards.map((card, index) => (
            <Card
              {...card}
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
